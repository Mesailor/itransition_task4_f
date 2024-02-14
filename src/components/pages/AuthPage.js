import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backService } from "../../services/backService";
import { AppContext } from "../context/AppContext";

function AuthPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [result, setResult] = useState("");
  const { setCurrentUser, setAuth } = useContext(AppContext);
  const navigate = useNavigate();

  function updateEmail(e) {
    setEmail(e.target.value);
  }
  function updatePassword(e) {
    setPassword(e.target.value);
  }

  async function authenticateUser(e) {
    e.preventDefault();

    let user = {
      email,
      password,
    };
    try {
      let response = await backService.sendAuthReq(user);
      setResult(response.message);
      if (response.result) {
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
      <h1 className="w-50 text-center my-4">Authentication Page</h1>
      <p className="w-50 h4 text-center text-danger">
        {result ? result : null}
      </p>
      <form className="w-50" onSubmit={authenticateUser}>
        <label className="form-label w-100">
          Email
          <input
            className="form-control"
            onChange={updateEmail}
            type="email"
            value={email}
            required
          />
        </label>
        <label className="form-label w-100">
          Password
          <input
            className="form-control"
            onChange={updatePassword}
            type="password"
            value={password}
            required
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Log in
        </button>
      </form>
      <p className="w-50">
        Dont have an account yet? <Link to="/reg">Sign in</Link>
      </p>
    </div>
  );
}

export default AuthPage;
