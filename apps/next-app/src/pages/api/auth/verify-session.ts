import {
  getFirebaseAuthAdmin,
  initFirebaseAdmin,
} from "@/lib/firebase/firebaseAdmin";
import getErrorMessage from "@/utils/getErrorMessage";
import isString from "@/utils/isString";
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

    res.status(200).json({ message: "Ok" });
  } catch (error) {
    console.log(getErrorMessage(error));

    // Session cookie is unavailable or invalid.
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default handler;
