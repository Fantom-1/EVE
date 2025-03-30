import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./assets/logo.png";
import loginbg2 from "./assets/loginbg2.jpg";
import React, { useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import {
  Box,
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset the password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMessage("Password reset email sent! Please check your inbox.");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="loginPage">
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginTop: "5%",
          height: "35rem",
          width: "30rem",
          backgroundImage: `url(${loginbg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 10px 0 rgba(153, 154, 169, 0.37)",
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <div className="heading">
          <img src={logo} alt="logo" className="logoInLogin" />
          <Typography variant="h4" sx={{ fontFamily: "sans-serif", color: "white" }}>
            Log in
          </Typography>
        </div>

        <TextField
          id="email"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            m: 1,
            width: "25ch",
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "white !important" },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
          }}
        />

        <FormControl
          sx={{
            m: 1,
            width: "25ch",
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "white !important" },
            "& .MuiInput-underline:after": { borderBottomColor: "white" },
          }}
          variant="standard"
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ input: { color: "white" } }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  sx={{ color: "white" }}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            color: "white",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Log In
        </Button>

        {error && <Typography sx={{ mt: 1, color: "red", fontSize: "0.9rem" }}>{error}</Typography>}
        {resetMessage && <Typography sx={{ mt: 1, color: "green", fontSize: "0.9rem" }}>{resetMessage}</Typography>}

        <div className="forgot">
          <Link to="#" className="opt1 a" onClick={handleForgotPassword}>
            Forgot your password?
          </Link>
        </div>
        <div className="option">
          <Typography variant="body2" sx={{ color: "white" }}>
            Don't have an account? <Link to="/signup" className="opt2 a">Sign up here</Link>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
