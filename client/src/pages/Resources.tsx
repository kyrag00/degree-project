import "../styles/resources.css";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();

  return (
    <div className="resources-page">
      <h2>{t("resources.emergencySupportHeading")}</h2>

      <section className="intro">
        <p>{t("resources.introText")}</p>
      </section>

      <section className="emergency-contacts">
        <h3>{t("resources.emergencyServicesHeading")}</h3>
        <ul>
          <li>
            <strong>{t("resources.eu")}</strong>: {t("resources.dial")}{" "}
            <strong>112</strong> {t("resources.emergencyServicesNote")}
          </li>
          <li>
            <strong>{t("resources.sweden")}</strong>: {t("resources.dial")}{" "}
            <strong>112</strong> {t("resources.emergencyServicesNote")}
          </li>
          <li>
            <strong>{t("resources.germany")}</strong>: {t("resources.dial")}{" "}
            <strong>112</strong> {t("resources.emergencyServicesNote")}
          </li>
          <li>
            <strong>{t("resources.france")}</strong>: {t("resources.dial")}{" "}
            <strong>112</strong> {t("resources.emergencyServicesNote")}
          </li>
          <li>
            <strong>{t("resources.spain")}</strong>: {t("resources.dial")}{" "}
            <strong>112</strong> {t("resources.emergencyServicesNote")}
          </li>
          <li>
            <strong>{t("resources.us")}</strong>: {t("resources.dial")}{" "}
            <strong>911</strong> {t("resources.emergencyServicesNote")}
          </li>
          <li>
            <strong>{t("resources.uk")}</strong>: {t("resources.dial")}{" "}
            <strong>999</strong> {t("resources.emergencyServicesNote")}
          </li>
        </ul>
      </section>

      <section className="suicide-prevention">
        <h3>{t("resources.suicidePreventionHeading")}</h3>
        <ul>
          <li>
            <strong>{t("resources.sweden")}</strong>:{" "}
            {t("resources.suicideHotline")} - <a href="tel:90101">90101</a>
          </li>
          <li>
            <strong>{t("resources.uk")}</strong>: Samaritans -{" "}
            <a href="tel:116123">116 123</a>
          </li>
          <li>
            <strong>{t("resources.germany")}</strong>: Telefonseelsorge -{" "}
            <a href="tel:0800111011">0800 111 011</a>
          </li>
          <li>
            <strong>{t("resources.france")}</strong>: Suicide Écoute -{" "}
            <a href="tel:0145394000">01 45 39 40 00</a>
          </li>
          <li>
            <strong>{t("resources.netherlands")}</strong>: 113 Suicide
            Prevention - <a href="tel:09000113">0900 0113</a>
          </li>
          <li>
            <strong>{t("resources.us")}</strong>: National Suicide Prevention
            Lifeline - <a href="tel:988">988</a>
          </li>
          <li>
            <strong>{t("resources.canada")}</strong>: Crisis Services Canada -{" "}
            <a href="tel:1-833-456-4566">1-833-456-4566</a>
          </li>
          <li>
            <strong>{t("resources.australia")}</strong>: Lifeline Australia -{" "}
            <a href="tel:131114">13 11 14</a>
          </li>
          <li>
            <strong>{t("resources.india")}</strong>: Suicide Prevention Helpline
            - <a href="tel:912227726771">91-22-2772 6771</a>
          </li>
          <li>
            <strong>{t("resources.india")}</strong>: AASRA Foundation -{" "}
            <a href="tel:919820466726">91-9820466726</a>
          </li>
        </ul>
      </section>

      <section className="mental-health-resources">
        <h3>{t("resources.mentalHealthHeading")}</h3>
        <ul>
          <li>
            <strong>{t("resources.sweden")}</strong>: Mind -{" "}
            <a href="https://mind.se/">www.mind.se</a>{" "}
            {t("resources.mentalHealthSupportNote")}
          </li>
          <li>
            <strong>{t("resources.germany")}</strong>: Deutsche Gesellschaft für
            Psychologie - <a href="https://www.dgps.de/">www.dgps.de</a>
          </li>
          <li>
            <strong>{t("resources.france")}</strong>: SOS Suicide -{" "}
            <a href="https://www.sos-suicide.org/">www.sos-suicide.org</a>
          </li>
          <li>
            <strong>{t("resources.netherlands")}</strong>: 113
            Zelfmoordpreventie - <a href="https://www.113.nl/">www.113.nl</a>{" "}
            {t("resources.crisisSupportNote")}
          </li>
          <li>
            <strong>{t("resources.eu")}</strong>: European Union Agency for
            Fundamental Rights -{" "}
            <a href="https://fra.europa.eu/en">www.fra.europa.eu</a>
          </li>
          <li>
            <strong>{t("resources.us")}</strong>: National Institute of Mental
            Health - <a href="https://www.nimh.nih.gov/">www.nimh.nih.gov</a>
          </li>
          <li>
            <strong>{t("resources.uk")}</strong>: Mind -{" "}
            <a href="https://www.mind.org.uk/">www.mind.org.uk</a>
          </li>
          <li>
            <strong>{t("resources.canada")}</strong>: Canadian Mental Health
            Association - <a href="https://cmha.ca/">www.cmha.ca</a>
          </li>
          <li>
            <strong>{t("resources.australia")}</strong>: Beyond Blue -{" "}
            <a href="https://www.beyondblue.org.au/">www.beyondblue.org.au</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resources;
