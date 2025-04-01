import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Card from "./Card.jsx";
import "./Events.css";

export default function Events() {
    const [menuBar, setMenuBar] = useState(false);
    const [events, setEvents] = useState([]);

    const toggleMenuBar = () => {
        setMenuBar(!menuBar);
    };

    // Fetch all events when the component mounts
    useEffect(() => {
        fetch("http://192.168.77.84:3111/api/events") // Fetch events from the API
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error("Error fetching events:", error));
    }, []);

    // Function to check if event data is valid
    const isValidEvent = (event) => {
        return event.Thumbnail_Link && event.Events && event.Teaser;
    };

    return (
        <div className="Events">
            {/* Particle effects container */}
            <div className="particle-container">
                {Array.from({ length: 30 }).map((_, index) => (
                    <div
                        key={index}
                        className="particle"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Navigation bar */}
            <NavBar toggleMenuBar={toggleMenuBar} />

            {/* Main content layout */}
            <div className="main_content">
                <div className="box1">
                    <h2>All Events</h2>
                    <div className="cards-grid">
                        {events.map((event, index) => {
                            // Only render valid events
                            if (isValidEvent(event)) {
                                return (
                                    <Card
                                        key={index}
                                        cardImg={event.Thumbnail_Link || "default_poster.jpg"}
                                        cardTitle={event.Events || ""}
                                        cardText={event.Teaser || ""}
                                        className="grid-card"
                                        moreInfoLink={event.MoreInfo_Link || "#"}
                                        registerLink={event.Registration_Link || "#"}
                                    />
                                );
                            }
                            return null; // Return nothing if the event is not valid
                        })}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p> &copy; 2025 Powered by <b>CRISPR</b></p>
            </footer>
        </div>
    );
}
