import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }

  return (
    <div className="login">
        <div className="dark">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="loginEmail">Username</label>
                <input 
                id="loginEmail" 
                className="loginInput" 
                type="text" 
                placeholder="Enter your username..." 
                ref={userRef}
                />
                <label htmlFor="loginPassword">Password</label>
                <input id="loginPassword" 
                className="loginInput" 
                type="password" 
                placeholder="Enter your password..." 
                ref={passwordRef}
                />
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
              <Link className="link" to='/register'>Register</Link>
            </button>
        </div>
    </div>
  );
}