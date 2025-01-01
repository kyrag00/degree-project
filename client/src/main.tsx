import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import { AuthProvider } from "./AuthProvider.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n.ts";
import LanguageSwitcher from "./LanguageSwitcher.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <I18nextProvider i18n={i18n}>
      <div>
        <LanguageSwitcher />
        <RouterProvider router={router} />
      </div>
    </I18nextProvider>
  </AuthProvider>
);
