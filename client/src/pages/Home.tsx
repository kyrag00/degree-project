import { useAuth } from "../AuthProvider";

const Home = () => {
  const user = useAuth();

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.email}!</h1>
      ) : (
        <h1>Welcome to Dear Diary!</h1>
      )}
    </div>
  );
};

export default Home;
