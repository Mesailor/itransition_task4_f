import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  let [currentUser, setCurrentUser] = useState("");
  let [auth, setAuth] = useState(false);

  let context = {
    currentUser,
    setCurrentUser,
    auth,
    setAuth,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
