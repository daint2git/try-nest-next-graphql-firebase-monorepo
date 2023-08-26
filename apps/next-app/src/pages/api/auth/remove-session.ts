import {
  getFirebaseAuthAdmin,
  initFirebaseAdmin,
} from "@/lib/firebase/firebaseAdmin";
import getErrorMessage from "@/utils/getErrorMessage";
import isProduction from "@/utils/isProduction";
import isString from "@/utils/isString";
import type { CookieSerializeOptions } from "cookie";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

initFirebaseAdmin();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionCookie = req.cookies["session"];

  // Invalid type
  if (!isString(sessionCookie) || sessionCookie.length === 0) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const authAdmin = getFirebaseAuthAdmin();

  try {
    // Verify the session cookie. In this case an additional check is added to detect
    // if the user's Firebase session was revoked, user deleted/disabled, etc.
    const decodedIdToken = await authAdmin.verifySessionCookie(
      sessionCookie,
      true /** checkRevoked */
    );

    // Cannot decode id token
    if (!decodedIdToken) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    // Revoke the session and also revokes all the user's other sessions
    await authAdmin.revokeRefreshTokens(decodedIdToken.sub);

    const cookieOptions: CookieSerializeOptions = {
      path: "/",
      maxAge: -1,
      httpOnly: true,
      sameSite: "strict",
      secure: isProduction(),
    };

    res.setHeader("Set-Cookie", cookie.serialize("session", "", cookieOptions));

    res.status(200).json({ message: "Ok" });
  } catch (error) {
    console.log(getErrorMessage(error));

    // Session cookie is unavailable or invalid.
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default handler;
