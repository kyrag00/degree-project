import { getAuth, signOut } from "firebase/auth";
import "../styles/navigation.css";

export const handleLogout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    alert("Logout successful!");
  } catch (error) {
    console.error("Error during logout:", error);
    alert("Failed to log out. Try again!");
  }
};

const Logout = () => {
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
