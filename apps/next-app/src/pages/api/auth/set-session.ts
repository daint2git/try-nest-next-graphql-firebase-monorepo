import { getFirebaseAuthAdmin } from "@/lib/firebase/firebaseAdmin";
import isString from "@/utils/isString";
import type { NextApiRequest, NextApiResponse } from "next";
import type { CookieSerializeOptions } from "cookie";
import cookie from "cookie";
import isProduction from "@/utils/isProduction";
import getErrorMessage from "@/utils/getErrorMessage";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const idToken = req.body.idToken;

  // Invalid type
  if (!isString(idToken) || idToken.length === 0) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const authAdmin = getFirebaseAuthAdmin();

  const decodedIdToken = await authAdmin.verifyIdToken(
    idToken,
    true /** checkRevoked */
  );

  // Cannot decode id token
  if (!decodedIdToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    // Set session expiration to 5 days.
    const expiresIn = 60 * 60 * 24 * 5; // in seconds;

    // Create the session cookie. This will also verify the ID token in the process.
    // The session cookie will have the same claims as the ID token.
    // To only allow session cookie setting on recent sign-in, auth_time in ID token
    // can be checked to ensure user was recently signed in before creating a session cookie.
    const sessionCookie = await authAdmin.createSessionCookie(idToken, {
      expiresIn: expiresIn * 1000, // in milliseconds,
    });

    const cookieOptions: CookieSerializeOptions = {
      path: "/",
      maxAge: expiresIn,
      httpOnly: true,
      sameSite: "strict",
      secure: isProduction(),
    };

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("session", sessionCookie, cookieOptions)
    );

    res.status(200).json({ message: "Ok" });
  } catch (error) {
    console.log(getErrorMessage(error));

    // Cannot create a session cookie.
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default handler;
