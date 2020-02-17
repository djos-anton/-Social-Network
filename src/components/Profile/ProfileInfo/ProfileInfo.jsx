import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.avatar}>
            <img src="/img/avatar.png"/>
        </div>
    );
}

export default ProfileInfo;