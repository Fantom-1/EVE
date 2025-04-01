import React, { useState } from "react";
import BottomHalfEvents from "./BottomHalfEvents";
import NavBar from "./NavBar";
import "./Events.css";

export default function Events() {
    const [menuBar, setMenuBar] = useState(false);

    const toggleMenuBar = () => {
        setMenuBar(!menuBar);
    };

    return (
        <div className="Events">
           
            <div className="particle-container">
                {Array.from({ length: 30 }).map((_, index) => (
                    <div
                        key={index}
                        className="particle"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                            animationDuration: `${5 + Math.random() * 5}s`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <NavBar toggleMenuBar={toggleMenuBar} />
            <BottomHalfEvents menuBar={menuBar} />
            <footer>
                <p> &copy; 2025 Powered by <b>CRISPR</b></p>
            </footer>
        </div>
    );
}
