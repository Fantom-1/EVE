import { React, useState } from "react";
import BottomHalfEvent from "./BottomHalfEvent.jsx";
import NavBar from "./NavBar.jsx";
import "./Event.css";

export default function Event(){

    let [menuBar, setMenuBar] = useState(false);

    let toggleMenuBar = () => {
        setMenuBar((!menuBar));
    }

    return(
        <div className="Event">
            <div className="NavBar" style={{zIndex: "1500"}}>
                <NavBar toggleMenuBar={toggleMenuBar}/>
            </div>
            <div className="BottomHalfEvent" style={{overflow: "hidden"}}>
                <BottomHalfEvent menuBar={menuBar}/>
            </div>
            
        </div>
    )
}