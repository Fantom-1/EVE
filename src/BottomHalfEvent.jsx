import Backdrop from '@mui/material/Backdrop';
import SidePanel from "./SidePanel.jsx";
import "./BottomHalfEvent.css";
import EventInfo from "./EventInfo.jsx";

export default function BottomHalfEvent({menuBar, toggleMenuBar}){

    return(
        <div className="BottomHalfEvent">
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
            <div className="EventInfo" >
                <EventInfo/>
            </div>
        </div>
    )
}