import Backdrop from '@mui/material/Backdrop';
import SidePanel from "./SidePanel.jsx";
import "./BottomHalf.css";
import Content from "./Content.jsx";

export default function BottomHalf({menuBar, toggleMenuBar}){

    return(
        <div className="BottomHalf">
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
            <div className="Content" >
                <Content/>
            </div>
        </div>
    )
}