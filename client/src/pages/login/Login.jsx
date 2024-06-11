import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="dark">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="loginEmail">Email</label>
                <input id="loginEmail" className="loginInput" type="email" placeholder="Enter your email..." />
                <label htmlFor="loginPassword">Password</label>
                <input id="loginPassword" className="loginInput" type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
              <Link className="link" to='/register'>Register</Link>
            </button>
        </div>
    </div>
  );
}