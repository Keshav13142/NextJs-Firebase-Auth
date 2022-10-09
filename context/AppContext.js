import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(null);
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || null);
  }, []);

  useEffect(() => {
    user ? router.push("/dashboard") : router.push("/");
  }, [user]);

  return (
    <AppContext.Provider value={{ showToast, setShowToast, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
