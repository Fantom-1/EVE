import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from "./assets/logo.png";
import loginbg2 from "./assets/loginbg2.jpg";
import * as React from "react";
import {
  Box,
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Firebase
import { auth } from "./firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleMouseUpPassword = (event) => event.preventDefault();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signupPage">
      <Box
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
          <img src={logo} alt="reload" className="logoInSignup" />
          <h1 style={{ fontFamily: "sans-serif", color: "white" }}>Sign up</h1>
        </div>

        <form onSubmit={handleSignup}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="username"
              label="Username"
              variant="standard"
              sx={{
                m: 1,
                width: "25ch",
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "white" },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "white !important",
                },
                "& .MuiInput-underline:after": { borderBottomColor: "white" },
              }}
            />

            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email"
              variant="standard"
              sx={{
                m: 1,
                width: "25ch",
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "white" },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "white !important",
                },
                "& .MuiInput-underline:after": { borderBottomColor: "white" },
              }}
            />

            <FormControl
              sx={{
                m: 1,
                width: "25ch",
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInput-underline:before": { borderBottomColor: "white" },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "white !important",
                },
                "& .MuiInput-underline:after": { borderBottomColor: "white" },
              }}
              variant="standard"
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                sx={{ input: { color: "white" } }}
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              color: "white",
            }}
          >
            Sign Up
          </Button>
        </form>

        <div className="option">
          <p>Already have an account?</p>
          <Link to="/login" className="opt2 a">
            Log in here
          </Link>
        </div>
      </Box>
    </div>
  );
}
