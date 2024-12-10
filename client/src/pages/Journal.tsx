import { useAuth } from "../AuthProvider";

const Journal = () => {
  const user = useAuth();

  return (
    <div>
      {user ? (
        <h2>Welcome to your journal, {user.email}!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
};

export default Journal;
