import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
        <div className="dark">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label htmlFor="username">Username</label>
                <input id="username" className="registerInput" type="text" placeholder="FurryLover1" />
                <label htmlFor="registerEmail">Email</label>
                <input id="registerEmail" className="registerInput" type="email" placeholder="Enter your email..." />
                <label htmlFor="registerPassword">Password</label>
                <input id="registerPassword" className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
              <Link className="link" to="/login">Back To Log In</Link>
            </button>
        </div>
    </div>
  );
}