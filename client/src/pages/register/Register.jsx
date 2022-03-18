import { useRef } from "react";
import "./register.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const HandleSubmit =async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords do not match !");
    }
    else{
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value

        }
        try {
          await axios.post("/auth/register",user );
          navigate('/');
          
        } catch (error) {
          console.log(error);
        }

    }

  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={HandleSubmit}>
            <input required ref={username} placeholder="Username" className="loginInput" />
            <input required type={"email"} ref={email} placeholder="Email" className="loginInput" />
            <input required type={"password"} ref={password} placeholder="Password" className="loginInput" />
            <input required type={"password"} ref={passwordAgain} placeholder="Password Again" className="loginInput" />
            <button type={"submit"} className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
