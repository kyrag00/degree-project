import { useTranslation } from "react-i18next";
import "./styles/languageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher-container">
      <div className="language-switcher-buttons">
        <button
          onClick={() => changeLanguage("en")}
          className="language-switcher-button"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("sv")}
          className="language-switcher-button"
        >
          Svenska
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
