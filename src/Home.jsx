import React, { useState } from "react";
import BottomHalf from "./BottomHalf";
import NavBar from "./NavBar";
import "./Home.css";

export default function Home() {
    const [menuBar, setMenuBar] = useState(false);

    const toggleMenuBar = () => {
        setMenuBar(!menuBar);
    };

    return (
        <div className="Home">
           
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
            <BottomHalf menuBar={menuBar} />
        </div>
    );
}
