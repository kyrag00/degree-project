import { NavLink } from "react-router-dom";
import "./styles/navigation.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { handleLogout } from "./pages/Logout";

const Navigation = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/journal">
            Journal
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/resources">
            Resources
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
              Logout
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
