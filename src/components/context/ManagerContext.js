import { createContext, useState } from "react";

export const ManagerContext = createContext();

export function ManagerProvider({ children }) {
  let [pickedUsers, setPickedUsers] = useState([]);
  const [users, setUsers] = useState(() => {
    return [];
  });
  let context = {
    users,
    setUsers,
    pickedUsers,
    setPickedUsers,
  };

  return (
    <ManagerContext.Provider value={context}>
      {children}
    </ManagerContext.Provider>
  );
}
