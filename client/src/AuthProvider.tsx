import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "./firebaseConfig";
import { ICustomUser } from "./interfaces/ICustomUser";
const AuthContext = createContext<ICustomUser | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<ICustomUser | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDoc = await getDoc(doc(db, "Users", firebaseUser.uid));
          const additionalData = userDoc.exists() ? userDoc.data() : {};
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            ...additionalData,
            getIdToken: () => firebaseUser.getIdToken(), 
          });
        } catch (error) {
          console.error("Error fetching Firestore user data:", error);
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            getIdToken: () => firebaseUser.getIdToken(),
          });
        }
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
