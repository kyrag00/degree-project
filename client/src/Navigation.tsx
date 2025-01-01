import { NavLink } from "react-router-dom";
import "./styles/navigation.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { handleLogout } from "./pages/Logout";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const auth = getAuth();
    const loggedOut = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => loggedOut();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <NavLink className="nav-link" to="/">
            {t("navigation.home")}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/journal">
            {t("navigation.journal")}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/resources">
            {t("navigation.resources")}
          </NavLink>
        </li>
        {user ? (
          <li>
            <NavLink
              className="nav-link"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              {t("navigation.logout")}
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink className="nav-link" to="/login">
                {t("navigation.login")}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/signup">
                {t("navigation.signup")}
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
