import { useContext, useEffect } from "react";
import UserRow from "./UserRow";
import { backService } from "../../services/backService";
import { ManagerContext } from "../context/ManagerContext";

function UserTable() {
  let { pickedUsers, setPickedUsers, users, setUsers } =
    useContext(ManagerContext);

  useEffect(() => {
    async function fetchUsers() {
      let users = await backService.getAllUsers();
      setUsers(users);
    }
    fetchUsers().catch((err) => {
      console.log(err);
    });
  }, [pickedUsers]);

  function updateChoice(e) {
    if (e.target.checked === true) {
      let choosen = [];
      for (let user of users) {
        choosen.push(user._id);
      }
      setPickedUsers(choosen);
    } else {
      setPickedUsers([]);
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input
              className="form-check-input"
              onChange={updateChoice}
              name="selectAll"
              type="checkbox"
              checked={pickedUsers.length === users.length}
            />
          </th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Last Login</th>
          <th>Registration Time</th>
          <th>Status</th>
        </tr>
        {!users.length
          ? null
          : users.map((user, i) => {
              return <UserRow key={user._id} user={user} id={i + 1} />;
            })}
      </thead>
    </table>
  );
}

export default UserTable;
