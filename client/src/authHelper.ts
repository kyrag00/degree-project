import { auth } from "./firebaseConfig";

export const fetchIdToken = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No user is currently signed in.");
  }

  return await user.getIdToken();
};
