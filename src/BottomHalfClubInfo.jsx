import Backdrop from '@mui/material/Backdrop';
import SidePanel from "./SidePanel.jsx";
import ClubDetails from "./ClubDetails.jsx";
import "./BottomHalfClubInfo.css";

export default function BottomHalfClubInfo({menuBar, toggleMenuBar, club}){

    return(
        <div className="BottomHalfClubInfo">
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
            <div className="ClubDetails" >
                <ClubDetails club={club} />
            </div>
        </div>
    )
}