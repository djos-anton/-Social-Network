import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from "./ProfileData/ProfileData";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <ProfileData/>
            <MyPosts/>
        </div>
    );
}

export default Profile;