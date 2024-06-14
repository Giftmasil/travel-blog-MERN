import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response =  await axios.post("/auth/register", {
        username,
        email,
        password
      })
      response.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className="register">
        <div className="dark">
        <i class=" loginIcon fa-solid fa-plane-departure"></i>
        <span className="loginTitle ">Voyager</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                id="username" 
                className="registerInput" 
                type="text" 
                placeholder="FurryLover1"
                onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor="registerEmail">Email</label>
                <input 
                id="registerEmail" 
                className="registerInput" 
                type="email" 
                placeholder="Enter your email..." 
                onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="registerPassword">Password</label>
                <input 
                id="registerPassword" 
                className="registerInput" 
                type="password" 
                placeholder="Enter your password..." 
                onChange={e => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
              <Link className="link" to="/login">Back To Log In</Link>
            </button>
            {error && <italic style={{ color: "red", marginTop: "10px" }}>invalid user name or password!!</italic>}
        </div>
    </div>
  );
}