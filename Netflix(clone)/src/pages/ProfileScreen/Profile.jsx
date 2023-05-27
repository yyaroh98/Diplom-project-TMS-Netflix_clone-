import React from "react";
import "./Profile.scss";
import Nav from "../../components/Navbar/Nav";
import avatar from "../../images/userIcon.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileSreen">
      <Nav />
      <div className="profileSreen__body">
        <h1>Edit Profile</h1>
        <div className="profileSreen__info">
          <img src={avatar} alt="Avatar" />
          <div className="profileSreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                className="profileSreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
