import React from "react";
import { Link, useLocation } from "react-router-dom";
import {crisprbg, dotslashbg, cresendobg, dimensionsbg, elevatebg, estoriabg, ioticsbg, oratorbg, probebg, strokesbg, udyambg} from "./assets/Pictures.jsx";
import "./SidePanel.css";
import clubBg2 from "./assets/clubBg2.jpg";

export default function SidePanel(){

    return(
        <div className='SidePanel' >
            
            <div className="home panel_options">
                <h5 id="ihome"><Link to={"/"} className="a">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span></Link>
                </h5>
            </div>
            <h5 className="panel_options"><Link to='/clubs' className="a">Clubs</Link></h5>
            <h5 className="panel_options"><Link to='/events' className="a">Events</Link></h5>                                                                                                                                                       
            <h5 className="panel_options"><Link to='/gallery' className="a">Gallery</Link></h5>
            <h5 className="panel_options"><Link to='/campuspulse' className="a">Campus Pulse</Link></h5>
            <h5 className="panel_options About"><Link to='/about' className="a">About</Link></h5>
            
           
        </div>
    )
}
