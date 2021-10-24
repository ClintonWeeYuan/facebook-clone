import React, { useRef, useContext } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Phasebook</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Phasebook.
          </span>
        </div>

        <div className="login-right">
          <form className="login-box" onSubmit={handleClick}>
            <input
              placeholder="Email"
              required
              type="email"
              className="login-input"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="login-input"
              ref={password}
            />
            <button className="login-button" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress sx={{ color: "white", size: "20px" }} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress sx={{ color: "white", size: "20px" }} />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
