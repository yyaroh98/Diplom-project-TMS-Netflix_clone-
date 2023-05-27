import React, { useState } from "react";
import "./LoginScreen.scss";
import logo from "../../images/logo.png";
import Signup from "../SignupPage/Signup";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img className="loginScreen__logo" src={logo} alt="" />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <Signup />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
