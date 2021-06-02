import React from "react";
import "./Sidebar.css";
import AdbIcon from '@material-ui/icons/Adb';import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import {Button} from "@material-ui/core"

function Sidebar() {
  return (
    <div className="sidebar">
      <AdbIcon className="twoot" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
    
    {/*tweeting*/}
    <Button variant ="outlined" className ="sidebar__tweet" fullWidth>Twoot</Button>
     
    </div>
  );
}

export default Sidebar;