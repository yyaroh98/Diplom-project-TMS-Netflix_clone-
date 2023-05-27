import React, { useEffect, useState } from "react";
import "./Nav.scss";
import logo from "../../images/logo.png";
import user from "../../images/userIcon.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show} && "nav__black"`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <img
          className="nav__avatar"
          src={user}
          alt="user"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Nav;
