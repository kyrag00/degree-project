import { useAuth } from "../AuthProvider";
import RandomQuestion from "../weeklyQuestions";
import "../styles/home.css";
import MoodHistory from "../MoodHistory";
import { useTranslation } from "react-i18next";
import RandomFact from "../RandomFact";

const Home = () => {
  const { t } = useTranslation();
  const user = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h1>{t("welcome", { name: user.firstName || user.email })}</h1>
          <RandomQuestion />
          <MoodHistory />
          <RandomFact />
        </div>
      ) : (
        <div className="home-container">
          <h1>{t("welcome_dear_diary")}</h1>
          <p>{t("intro_paragraph_1")}</p>
          <p>{t("intro_paragraph_2")}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
