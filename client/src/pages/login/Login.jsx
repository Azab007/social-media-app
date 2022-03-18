import "./login.css";
import {useRef, useContext} from 'react';
import {loginCall} from '../../apiCalls';
import { AuthContext } from "../../context/authContext";
import {CircularProgress} from '@material-ui/core'
export default function Login() {

  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const HandleSubmit = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value,password: password.current.value}, dispatch )
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
        <form className="loginRight" onSubmit={HandleSubmit}>
          <div className="loginBox">
            <input ref={email} placeholder="Email" type={"email"} required className="loginInput" />
            <input ref={password} placeholder="Password" type={"password"} required minLength={6} className="loginInput"/>
            <button type="submit" className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size={"20px"}/> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress color="white" size={"20px"}/> : "Create A new Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
