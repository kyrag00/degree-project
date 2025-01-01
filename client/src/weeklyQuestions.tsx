import { useState } from "react";
import "./styles/questions.css";
import { useTranslation } from "react-i18next";

const RandomQuestion = () => {
  const { t } = useTranslation();

  const weeklyQuestions = [
    t("randomQuestion.highlight"),
    t("randomQuestion.challenges"),
    t("randomQuestion.gratefulFor"),
    t("randomQuestion.learned"),
    t("randomQuestion.improve"),
    t("randomQuestion.proud"),
    t("randomQuestion.mistake"),
    t("randomQuestion.comfortZone"),
    t("randomQuestion.differently"),
    t("randomQuestion.tryNew"),
    t("randomQuestion.stressed"),
    t("randomQuestion.peace"),
    t("randomQuestion.lookForward"),
    t("randomQuestion.specialThing"),
  ];

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    return weeklyQuestions[Math.floor(Math.random() * weeklyQuestions.length)];
  });

  const getNewQuestion = () => {
    let newQuestion;
    do {
      newQuestion =
        weeklyQuestions[Math.floor(Math.random() * weeklyQuestions.length)];
    } while (newQuestion === currentQuestion);
    setCurrentQuestion(newQuestion);
  };

  return (
    <div className="random-question-container">
      <h2>{t("randomQuestion.needHelp")}</h2>
      <p>{t("randomQuestion.guidanceMessage")}</p>
      <h2>
        {t("randomQuestion.reflectOnThis")} <strong>{currentQuestion}</strong>
      </h2>
      <button onClick={getNewQuestion}>
        {t("randomQuestion.showAnother")}
      </button>
    </div>
  );
};

export default RandomQuestion;
