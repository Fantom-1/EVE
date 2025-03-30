
import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import ClubInfo from "./ClubInfo.jsx";
import Event from "./Event.jsx";
import Login from "./Login.jsx";
import Gallery from "./Gallery.jsx";
import Signup from "./Signup.jsx";
import Clubs from "./Clubs.jsx";
import CreateEvent from "./CreateEvent";
import CampusPulse from './CampusPulse';
import AllEvents from './AllEvents.jsx';

import "./App.css";
import { DNA } from "react-loader-spinner";
import ProtectedRoute from "./ProtectedRoute.jsx";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      
      <div className="app">
            
        

      {/* Loading Spinner */}
      {loading && (
        <div className="loader-overlay">
          <DNA visible={true} height="150" width="150" ariaLabel="dna-loading" />
        </div>
      )}

      {/* App Content */}
      {!loading && (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="clubs" element={<Clubs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/event" element={<Event />} />
            <Route path="/clubs/crispr-info" element={<ClubInfo />} />
            <Route path="/campuspulse" element={<CampusPulse />} />
            <Route path="/create-event" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
            <Route path="/AllEvents" element={<AllEvents />} />
          </Routes>
        </Router>
      )}
      </div>
    </>
  );
}

export default App;

