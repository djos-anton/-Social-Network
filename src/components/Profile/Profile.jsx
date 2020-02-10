import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.block1}>block1</div>
            <div className={classes.block2}>block2</div>
            <div className={classes.block3}>
                <MyPosts/>
            </div>

        </div>
    );
}

export default Profile;