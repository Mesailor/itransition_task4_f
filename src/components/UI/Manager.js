import { ManagerProvider } from "../context/ManagerContext";
import Control from "./Control";
import UserTable from "./UserTable";

function Manager() {
  return (
    <div className="container fs-4 my-4">
      <ManagerProvider>
        <Control />
        <UserTable />
      </ManagerProvider>
    </div>
  );
}

export default Manager;
