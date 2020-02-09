import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.block1}>block1</div>
            <div className={classes.block2}>block2</div>
            <div className={classes.block3}>block3</div>
        </div>
    );
}

export default Profile;