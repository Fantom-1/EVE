
import "./EventInfo.css";
import reeldeal_banner from "./assets/reeldeal_banner.webp";
import eSummit_logo from "./assets/e-summit_logo.webp";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventOrganisers from "./EventOrganisers.jsx";
import EventDetails from "./EventDetails.jsx";

export default function EventInfo(){

    return(
        <div className="EventInfo">
            <div>
                <img src={reeldeal_banner} alt="banner" className="banner"/>
            </div>
            <div className="eventContent">
                <div className="eventHead">
                    <div className="eventName">
                        <img src={eSummit_logo} alt="banner" className="eSummit_logo"/>
                        <div>
                            <h1>ReelDeal</h1>
                            <p>Indian Institute of Information Technology Nagpur (IIITN)</p>
                        </div>
                    </div>
                    <div className="aboutEvent">
                        <div className="eveDet">
                            <EmojiEventsIcon className="eveHeadIcons"/>
                            <p>E-Summit 2025</p>
                        </div>
                        <div className="eveDet">
                            <PlaceIcon className="eveHeadIcons"/>
                            <p>Online</p>
                        </div>
                        <div className="eveDet">
                            <CalendarMonthIcon className="eveHeadIcons"/>
                            <p>Updated On: Jan 21, 2025</p>
                        </div>
                    </div>
                    <div className="theme">
                        <div className="themeOpt">
                            <p>Photography</p>
                        </div>
                        <div className="themeOpt">
                            <p>Music</p>
                        </div>
                        <div className="themeOpt">
                            <p>Dance</p>
                        </div>
                        <div className="themeOpt">
                            <p>Story Telling</p>
                        </div>
                    </div>

                </div>

                <div className="EveDetails">
                    <EventDetails/>
                </div>

                <div className="EventOrgs">
                    <EventOrganisers/>
                </div>
            </div>

        </div>
    )
}