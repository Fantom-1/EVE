import { React,useState } from "react";
import { useLocation } from "react-router-dom";
import BottomHalfClubInfo from "./BottomHalfClubInfo.jsx";
import NavBar from "./NavBar.jsx";
import { ClubsData } from "./ClubsData.jsx";
import "./ClubInfo.css";

export default function ClubInfo(){

    let [menuBar, setMenuBar] = useState(false);
    const [selectedClub, setSelectedClub] = useState(ClubsData.crispr);
    
    let toggleMenuBar = () => {
        setMenuBar((!menuBar));            
    }

    return(
        <div className="ClubInfo" >
            <div className="NavBar" style={{zIndex: "1500" }}>
                <NavBar toggleMenuBar={toggleMenuBar}/>
            </div>
            <div className="BottomHalfClubInfo" style={{overflow: "hidden"}}>
                <BottomHalfClubInfo menuBar={menuBar} />
            </div>
            
        </div>
    )
}