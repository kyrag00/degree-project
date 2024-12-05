import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./styles/footer.css";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Dear Diary</p>
      </footer>
    </>
  );
};

export default Layout;
