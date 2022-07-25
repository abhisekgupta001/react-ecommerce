import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  const loginHandler = () => {
    setIsLoggedIn((prev) => !prev);
    navigate(location.state.from.pathname);
  };

  return (
    <div>
      <Navbar />
      Login Page
      <button onClick={loginHandler}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Login;
