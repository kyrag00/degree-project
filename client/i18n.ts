import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // HOME PAGE
        welcome: "Welcome, {{name}}!",
        welcome_dear_diary: "Welcome to Dear Diary!",
        intro_paragraph_1:
          "Dear Diary is your personal space to reflect, record, and grow. Whether you're jotting down daily thoughts, tracking your mood, or exploring our reflective questions, this is your safe space to be yourself.",
        intro_paragraph_2:
          "Start by exploring your journal or let our weekly prompts inspire your next entry. Remember, this is your journey—make it yours!",

        //LOGIN PAGE
        login: {
          title: "Login",
          emailPlaceholder: "Email",
          passwordPlaceholder: "Password",
          button: "Login",
        },
        error: {
          unknown: "An unknown error occurred.",
        },

        //NAVIGATION
        navigation: {
          home: "Home",
          journal: "Journal",
          resources: "Resources",
          login: "Login",
          signup: "Sign Up",
          logout: "Logout",
        },

        //JOURNAL
        journal: {
          welcomeMessage: "Welcome to your journal, {{name}}!",
          pleaseLogIn: "Please log in to view your journal.",
          title: "Title",
          content: "Content",
          mood: "Mood",
          addEntry: "Add Entry",
          edit: "Edit",
          delete: "Delete",
          save: "Save",
          cancel: "Cancel",
          confirmDelete: "Are you sure you want to delete this entry?",
          errorFetchingEntries: "Error fetching journal entries.",
          errorAddingEntry: "Error adding journal entry.",
          errorDeletingEntry: "Error deleting journal entry.",
          errorSavingEntry: "Error saving journal entry.",
          unknownDate: "Unknown date",
          date: "Date",
          placeholderTitle: "Enter title",
          placeholderContent: "Enter content",
          placeholderMood: "Enter mood",
        },

        //RESOURCES
        resources: {
          emergencySupportHeading: "Emergency & Support Resources",
          introText:
            "If you or someone you know is going through a difficult time, it's important to reach out for help. Here are some emergency and mental health resources available. Please use these contacts if you or someone else is in immediate need of assistance.",
          emergencyServicesHeading: "Emergency Services",
          suicidePreventionHeading: "Suicide Prevention Hotlines",
          mentalHealthHeading: "Mental Health Support",
          eu: "European Union",
          sweden: "Sweden",
          germany: "Germany",
          france: "France",
          spain: "Spain",
          us: "United States",
          uk: "United Kingdom",
          canada: "Canada",
          australia: "Australia",
          india: "India",
          netherlands: "Netherlands",
          dial: "Dial",
          emergencyServicesNote:
            "for emergency services (works in all EU countries)",
          suicideHotline: "Suicide Hotline",
          mentalHealthSupportNote:
            "(Mental health support and crisis services)",
          crisisSupportNote: "(Crisis and suicide prevention)",
        },

        //QUESTIONS
        randomQuestion: {
          needHelp: "Need help reflecting?",
          guidanceMessage:
            "Sometimes it's hard to know where to start when journaling. These questions are here to guide your thoughts and help you reflect on your week.",
          reflectOnThis: "Reflect on this:",
          showAnother: "Show me another question",
          highlight: "What was the highlight of your week?",
          challenges: "What challenges did you face this week?",
          gratefulFor: "What are you most grateful for this week?",
          learned: "What's something new you learned?",
          improve: "What's one thing you'd like to improve next week?",
          proud: "What is one thing you did this week that made you proud?",
          mistake:
            "What mistake did you make this week, and what did you learn from it?",
          comfortZone: "How did you step out of your comfort zone this week?",
          differently:
            "What's one thing you wish you had done differently this week?",
          tryNew: "Did you try anything new this week? How did it go?",
          stressed:
            "What stressed you out the most this week, and how did you handle it?",
          peace: "When did you feel most at peace this week?",
          lookForward: "What's one thing you're looking forward to next week?",
          specialThing: "What's one little thing that made this week special?",
        },

        //MOODHISTORY
        moodHistory: {
          title: "Your Mood History",
          unknownDate: "Unknown date",
          emptyState: "No moods logged yet. Start tracking today!",
        },
      },
    },

    sv: {
      translation: {
        //HOME PAGE
        welcome: "Välkommen, {{name}}!",
        welcome_dear_diary: "Välkommen till Dear Diary!",
        intro_paragraph_1:
          "Dear Diary är din personliga plats att reflektera, skriva ner och växa. Oavsett om du skriver ner dagliga tankar, spårar ditt humör eller utforskar våra reflekterande frågor, är detta din trygga plats att vara dig själv.",
        intro_paragraph_2:
          "Börja med att utforska din journal eller låt våra veckovisa uppmaningar inspirera ditt nästa inlägg. Kom ihåg att detta är din resa—gör den till din!",

        //LOGIN PAGE
        login: {
          title: "Logga in",
          emailPlaceholder: "E-post",
          passwordPlaceholder: "Lösenord",
          button: "Logga in",
        },
        error: {
          unknown: "Ett okänt fel uppstod.",
        },

        //NAVIGATION
        navigation: {
          home: "Hem",
          journal: "Dagbok",
          resources: "Resurser",
          login: "Logga in",
          signup: "Registrera",
          logout: "Logga ut",
        },

        //JOURNAL
        journal: {
          welcomeMessage: "Välkommen till din dagbok, {{name}}!",
          pleaseLogIn: "Logga in för att se din dagbok.",
          title: "Titel",
          content: "Innehåll",
          mood: "Humör",
          addEntry: "Lägg till inlägg",
          edit: "Redigera",
          delete: "Radera",
          save: "Spara",
          cancel: "Avbryt",
          confirmDelete: "Är du säker på att du vill radera detta inlägg?",
          errorFetchingEntries: "Fel vid hämtning av dagboksinlägg.",
          errorAddingEntry: "Fel vid tillägg av dagboksinlägg.",
          errorDeletingEntry: "Fel vid radering av dagboksinlägg.",
          errorSavingEntry: "Fel vid sparning av dagboksinlägg.",
          unknownDate: "Okänt datum",
          date: "Datum",
          placeholderTitle: "Ange titel",
          placeholderContent: "Ange innehåll",
          placeholderMood: "Ange humör",
        },

        //RESOURCES
        resources: {
          emergencySupportHeading: "Nödläge & Stödresurser",
          introText:
            "Om du eller någon du känner går igenom en svår tid är det viktigt att söka hjälp. Här är några nödläges- och mentalvårdsresurser som finns tillgängliga. Använd dessa kontakter om du eller någon annan är i omedelbart behov av hjälp.",
          emergencyServicesHeading: "Nödtjänster",
          suicidePreventionHeading: "Självmordsprevention Hotline",
          mentalHealthHeading: "Stöd för mental hälsa",
          eu: "Europeiska unionen",
          sweden: "Sverige",
          germany: "Tyskland",
          france: "Frankrike",
          spain: "Spanien",
          us: "USA",
          uk: "Storbritannien",
          canada: "Kanada",
          australia: "Australien",
          india: "Indien",
          netherlands: "Nederländerna",
          dial: "Ring",
          emergencyServicesNote: "för nödtjänster (fungerar i alla EU-länder)",
          suicideHotline: "Självmordslinje",
          mentalHealthSupportNote: "(Stöd för mental hälsa och kris)",
          crisisSupportNote: "(Kris och självmordsprevention)",
        },

        //QUESTIONS
        randomQuestion: {
          needHelp: "Behöver du hjälp att reflektera?",
          guidanceMessage:
            "Ibland är det svårt att veta var man ska börja när man skriver i sin journal. Dessa frågor är här för att vägleda dina tankar och hjälpa dig att reflektera över din vecka.",
          reflectOnThis: "Reflektera över detta:",
          showAnother: "Visa en annan fråga",
          highlight: "Vad var höjdpunkten under din vecka?",
          challenges: "Vilka utmaningar stötte du på under veckan?",
          gratefulFor: "Vad är du mest tacksam för denna vecka?",
          learned: "Vad har du lärt dig denna vecka?",
          improve: "Vad är en sak du skulle vilja förbättra nästa vecka?",
          proud: "Vad är en sak du gjorde denna vecka som du är stolt över?",
          mistake:
            "Vilket misstag gjorde du denna vecka, och vad lärde du dig av det?",
          comfortZone: "Hur har du klivit utanför din komfortzon denna vecka?",
          differently:
            "Vad är en sak du önskar att du hade gjort annorlunda denna vecka?",
          tryNew: "Har du provat något nytt denna vecka? Hur gick det?",
          stressed:
            "Vad stressade dig mest denna vecka, och hur hanterade du det?",
          peace: "När kände du dig mest i fred denna vecka?",
          lookForward: "Vad ser du fram emot nästa vecka?",
          specialThing: "Vad var en liten sak som gjorde denna vecka speciell?",
        },

        //MOODHISTORY
        moodHistory: {
          title: "Din Stämningshistorik",
          unknownDate: "Okänt datum",
          emptyState: "Inga stämningar loggade ännu. Börja spåra idag!",
        },
      },
    },
  },
  lng: "en", // Default
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
