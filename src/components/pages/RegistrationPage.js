import { useContext, useState } from "react";
import { backService } from "../../services/backService";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function RegistrationPage() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [result, setResult] = useState("");
  const { setAuth, setCurrentUser } = useContext(AppContext);
  const navigate = useNavigate();

  function updateName(e) {
    setName(e.target.value);
  }
  function updateEmail(e) {
    setEmail(e.target.value);
  }
  function updatePassword(e) {
    setPassword(e.target.value);
  }

  async function createUser(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    try {
      let response = await backService.sendCreateReq(user);
      setResult(response.message);
      if (response.user) {
        setCurrentUser(response.user);
        setAuth(true);
        return navigate("/");
      }
    } catch (err) {
      setResult("Something went wrong...");
      console.log(err.message);
    }
  }

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="w-50 text-center my-4">Registration Page</h1>
      <p className="w-50 h4 text-center text-danger">
        {result ? result : null}
      </p>
      <form className="w-50" onSubmit={createUser}>
        <label className="form-label w-100">
          Name
          <input
            className="form-control"
            onChange={updateName}
            type="text"
            value={name}
          />
        </label>
        <label className="form-label w-100">
          Email
          <input
            className="form-control"
            onChange={updateEmail}
            type="text"
            value={email}
          />
        </label>
        <label className="form-label w-100">
          Password
          <input
            className="form-control"
            onChange={updatePassword}
            type="text"
            value={password}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <p className="w-50">
        Already have an account? <Link to="/auth">Log in</Link>
      </p>
    </div>
  );
}

export default RegistrationPage;
