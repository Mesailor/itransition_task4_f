import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Header() {
  let { currentUser } = useContext(AppContext);
  return (
    <div className="container-fluid bg-primary text-white d-flex justify-content-end px-5 py-3">
      <h1 className="display-6 mx-5 my-0 align-self-center">
        Hello, <Link className="text-info">{currentUser.name}</Link>!
      </h1>
      <Link className="display-6 text-info align-self-center" to="/auth">
        Logout
      </Link>
    </div>
  );
}

export default Header;
