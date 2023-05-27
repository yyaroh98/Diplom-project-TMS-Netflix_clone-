import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomePage/HomeScreen";
import LoginScreen from "./pages/LoginPage/LoginScreen";
import Profile from "./pages/ProfileScreen/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import "./App.scss";

function App() {
  // const user = null;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // Logged In
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        // Logged Out (Not Logged In)
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/profile" element={<Profile />} />

          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
