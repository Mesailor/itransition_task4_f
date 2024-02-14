import { useContext } from "react";
import { ManagerContext } from "../context/ManagerContext";
import { backService } from "../../services/backService";
import { AppContext } from "../context/AppContext";

function Control() {
  let { pickedUsers, setPickedUsers } = useContext(ManagerContext);
  let { currentUser, setAuth } = useContext(AppContext);

  async function blockUser() {
    if (!pickedUsers[0]) return alert("Choose user please!");
    let response = await backService.sendStatusUpdate(pickedUsers, "blocked");
    console.log(response.message);
    if (pickedUsers.includes(currentUser._id)) {
      setAuth(false);
    }
    setPickedUsers([]);
  }

  async function unblockUser() {
    if (!pickedUsers[0]) return alert("Choose user please!");
    let response = await backService.sendStatusUpdate(pickedUsers, "active");
    console.log(response.message);
    setPickedUsers([]);
  }

  async function deleteUser() {
    if (!pickedUsers[0]) return alert("Choose user please!");
    let response = await backService.deleteUserReq(pickedUsers);
    console.log(response.message);
    if (pickedUsers.includes(currentUser._id)) {
      setAuth(false);
    }
    setPickedUsers([]);
  }

  return (
    <div className="p-3">
      <button onClick={blockUser} className="block m-2 px-4">
        Block{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-lock pb-1"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
        </svg>
      </button>
      <button onClick={unblockUser} className="unblock m-2 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-unlock pb-1"
          viewBox="0 0 16 16"
        >
          <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2M3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
        </svg>
      </button>
      <button
        onClick={deleteUser}
        className="delete m-2 px-3 bg-danger text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-trash pb-1"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
    </div>
  );
}

export default Control;
