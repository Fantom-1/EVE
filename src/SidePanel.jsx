import React from "react";
import { Link, useLocation } from "react-router-dom";
import {crisprbg, dotslashbg, cresendobg, dimensionsbg, elevatebg, estoriabg, ioticsbg, oratorbg, probebg, strokesbg, udyambg} from "./assets/Pictures.jsx";
import "./SidePanel.css";

export default function SidePanel(){

    const location = useLocation();

    const backgroundStyle = () => {
        switch (location.pathname) {
            case "/":
                return { backgroundColor: "#121212" }; 
            case "/clubs":
                return { backgroundColor: "#121212" }; 
            case "/event":
                return { backgroundColor: "#121212" }; 
            case "/clubs/crispr-info":
                return { backgroundImage: `url(${crisprbg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/dotslash-info":
                return { backgroundImage: `url(${dotslashbg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/udyam-info":
                return { backgroundImage: `url(${udyambg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/cresendo-info":
                return { backgroundImage: `url(${cresendobg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/dimensions-info":
                return { backgroundImage: `url(${dimensionsbg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/elevate-info":
                return { backgroundImage: `url(${elevatebg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/estoria-info":
                return { backgroundImage: `url(${estoriabg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/iotics-info":
                return { backgroundImage: `url(${ioticsbg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/orator-info":
                return { backgroundImage: `url(${oratorbg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/probe-info":
                return { backgroundImage: `url(${probebg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', };
            case "/clubs/strokes-info":
                return { backgroundImage: `url(${strokesbg})` ,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', }; 
            case "/eventhistory":
                return { backgroundColor: "#fff" }; 
            case "/about":
                return { backgroundColor: "#fff" }; 
                case "/campuspuls":
                    return { backgroundColor: "#fff" }; 
            default:
                return { backgroundColor: "#121212" }; 
    }
  };

    return(
        <div className='SidePanel' style={backgroundStyle()}>
            
            <div className="home panel_options">
                <h5 id="ihome"><Link to={"/"} className="a">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span></Link>
                </h5>
            </div>
            <h5 className="panel_options"><Link to='/clubs' className="a">Clubs</Link></h5>
            <h5 className="panel_options"><Link to='/events' className="a">Events</Link></h5>                                                                                                                                                       
            <h5 className="panel_options"><Link to='/gallery' className="a">Gallery</Link></h5>
            <h5 className="panel_options"><Link to='/eventhistory' className="a">Event History</Link></h5>
            <h5 className="panel_options"><Link to='/campuspulse' className="a">Campus Pulse</Link></h5>
            <h5 className="panel_options About"><Link to='/about' className="a">About</Link></h5>
            
           
        </div>
    )
}
