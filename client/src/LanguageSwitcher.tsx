import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <button
        onClick={() => changeLanguage("en")}
        style={{ marginRight: "1rem" }}
      >
        English
      </button>
      <button onClick={() => changeLanguage("sv")}>Svenska</button>
    </div>
  );
};

export default LanguageSwitcher;
