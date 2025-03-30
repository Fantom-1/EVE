import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import SearchBox from "./SearchBox.jsx";
import logo from "./assets/logo.png";
import { auth } from "./firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function NavBar({ toggleMenuBar }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // Track if user is an admin
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          // Check if the user is an admin by calling the backend API
          const token = await currentUser.getIdToken();
          const response = await fetch("http://localhost:5000/api/check-admin", {
            headers: { "Authorization": token }
          });

          const data = await response.json();
          setIsAdmin(data.isAdmin); // Set isAdmin based on backend response
        } catch (error) {
          console.error("Error checking admin status:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have been signed out.");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="navbar">
      <div className="menu_bar" onClick={toggleMenuBar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="logoContainer">
        <Link to="/">
          <img src={logo} alt="reload" className="logo" />
        </Link>
      </div>
      <div className="SearchBox">
        <SearchBox />
      </div>
      <div className="register">
        {user ? (
          <>
            <Avatar src={user.photoURL || "/broken-image.jpg"} className="avatar" />
            {/* Only show the "Create Event" button if the user is an admin */}
            {isAdmin && (
              <Link to="/create-event" className="btn btn-outline-light create-event-btn">
                Create Event
              </Link>
            )}
            <button onClick={handleSignOut} className="btn btn-outline-light">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">
              Log In
            </Link>
            <Link to="/signup" className="btn btn-outline-light">
              Sign Up
            </Link>
            <Avatar src="/broken-image.jpg" className="avatar" />
          </>
        )}
      </div>
    </div>
  );
}
