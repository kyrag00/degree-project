import { useAuth } from "../AuthProvider";
import RandomQuestion from "../weeklyQuestions";
import "../styles/home.css";

const Home = () => {
  const user = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.firstName || user.email}!</h1>
          <RandomQuestion />
        </div>
      ) : (
        <div className="home-container">
          <h1>Welcome to Dear Diary!</h1>
          <p>
            Dear Diary is your personal space to reflect, record, and grow.
            Whether you're jotting down daily thoughts, tracking your mood, or
            exploring our weekly questions, this is your safe space to be
            yourself.
          </p>
          <p>
            Start by exploring your journal or let our weekly prompts inspire
            your next entry. Remember, this is your journey—make it yours!
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
