import React from "react";
import classes from "./ProfileData.module.css";

const ProfileData = () => {
    return (
        <div className={classes.avatarData}>
            <div className={classes.data}>
                First Name: Alexsandr
                <br/>
                Last Name: Pupkin
                <br/>
                Specialization: Biologist
                <br/>
                Academic Degree: КБН
            </div>
        </div>
    );
}

export default ProfileData;