


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from "./assets/logo.png";
import SearchBox from "./SearchBox.jsx";
import "./NavBar.css";

export default function NavBar({ toggleMenuBar }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const token = await currentUser.getIdToken();
          const response = await fetch("http://localhost:5000/api/check-admin", {
            headers: { "Authorization": token }
          });
          const data = await response.json();
          setIsAdmin(data.isAdmin);
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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar position="sticky" sx={{ backgroundColor: "transparent", boxShadow: "2px 2px 2px rgba(0,0,0,0.3)", zIndex: 1500 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleMenuBar} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }} className="SearchBox">
            <SearchBox />
          </Box>
          {user ? (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <Avatar src={user.photoURL || "/broken-image.jpg"} className="avatar" />
              </IconButton>
              <Menu
              style={{zIndex:"1602" , marginTop:"3rem"}}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {isAdmin && (
                  <MenuItem component={Link} to="/create-event">Create Event</MenuItem>
                )}
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/signup" className="signUpBtn">
              Sign Up
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
