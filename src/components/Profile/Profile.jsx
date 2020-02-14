import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.avatar}>
                <img src="/img/avatar.png"/>
            </div>
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
            <div className={classes.block3}>
                <div className={classes.data}>
                    <MyPosts/>
                </div>
            </div>

        </div>
    );
}

export default Profile;