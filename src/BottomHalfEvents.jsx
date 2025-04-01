import Backdrop from '@mui/material/Backdrop';
import SidePanel from "./SidePanel.jsx";
import "./BottomHalfEvents.css";
import EventsContent from "./EventsContent.jsx";

export default function BottomHalfEvents({menuBar, toggleMenuBar}){

    return(
        <div className="BottomHalfEvents">
            <div className={`SidePanel ${menuBar ? "visible" : "hidden"}`}>
                <SidePanel/>
            </div>
            <div className='Backdrop'>
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer-1 })}
                    open={menuBar}
                    onClick={toggleMenuBar}
                >
                </Backdrop>
            </div>
            <div className="EventsContent" >
                <EventsContent/>
            </div>
        </div>
    )
}