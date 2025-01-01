import { getAuth, signOut } from "firebase/auth";
import "../styles/navigation.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const handleLogout = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during logout:", error);
    alert("Failed to log out. Try again!");
  }
};

const Logout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logoutAndRedirect = async () => {
    await handleLogout();
    navigate("/");
  };
  return <button onClick={logoutAndRedirect}>{t("navigation.logout")}</button>;
};

export default Logout;
