import React from "react";
import classes from "./FriendsNavBar.module.css";
import Friend from "./Friend/Friend";

const FriendsNavBar = () => {
    return (
        <div className={classes.friends}>
            <div>Frients</div>
            <Friend id = "6" name = "VolodFo" img = "/img/vov250.png"/>
            <Friend id = "4" name = "AndruhK" img = "/img/and250.png"/>
            <Friend id = "2" name = "IvasShv" img = "/img/vas250.png"/>
        </div>
    );
}

export default FriendsNavBar;