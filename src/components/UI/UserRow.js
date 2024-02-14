import { useContext } from "react";
import { ManagerContext } from "../context/ManagerContext";

function UserRow({ user, id }) {
  let { pickedUsers, setPickedUsers } = useContext(ManagerContext);

  function updateChoice(e) {
    let choosen = pickedUsers.slice();
    if (e.target.checked === true) {
      choosen.push(user._id);
      setPickedUsers(choosen);
    } else {
      choosen.splice(choosen.indexOf(user._id), 1);
      setPickedUsers(choosen);
    }
  }

  return (
    <tr>
      <td>
        <input
          className="form-check-input"
          onChange={updateChoice}
          type="checkbox"
          checked={pickedUsers.includes(user._id)}
        />
      </td>
      <td>{id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{new Date(user.lastLoginTime).toLocaleString()}</td>
      <td>{new Date(user.registrationTime).toLocaleString()}</td>
      <td>{user.status}</td>
    </tr>
  );
}

export default UserRow;
