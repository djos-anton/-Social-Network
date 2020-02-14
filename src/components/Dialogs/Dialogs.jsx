import React from 'react';
import classes from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                <div className={`${classes.dialog} ${classes.active}`}>Uchitel</div>
                <div className={classes.dialog}>Telesic</div>
                <div className={classes.dialog}>Andrusha</div>
                <div className={classes.dialog}>SamiyUmniy</div>
                <div className={classes.dialog}>Vladik</div>
                <div className={classes.dialog}>Egorushka</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Hey hey</div>
            </div>
            <div className={classes.block3}>block3</div>
        </div>
    );
}

export default Dialogs;