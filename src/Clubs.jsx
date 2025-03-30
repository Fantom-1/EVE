import React from "react";
import { useState } from "react";
import BottomHalfClub from "./BottomHalfClub.jsx";
import NavBar from "./NavBar.jsx";
import "./Clubs.css";

export default function Clubs(){

    let [menuBar, setMenuBar] = useState(false);

    let toggleMenuBar = () => {
        setMenuBar((!menuBar));
    }

    return(
        <div className="Clubs">
            <div className="NavBar" style={{zIndex: "1500"}}>
                <NavBar toggleMenuBar={toggleMenuBar}/>
            </div>
            <div className="BottomHalfClub" style={{overflow: "hidden"}}>
                <BottomHalfClub menuBar={menuBar}/>
            </div>
            
        </div>
    )
}