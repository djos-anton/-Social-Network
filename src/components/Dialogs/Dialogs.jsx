import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                <DialogItem id = "1" name = "Uchitel"/>
                <DialogItem id = "2" name = "Telesic"/>
                <DialogItem id = "3" name = "Egorushka"/>
                <DialogItem id = "4" name = "Andrusha"/>
                <DialogItem id = "5" name = "Vladik"/>
                <DialogItem id = "6" name = "SamiyUmniy"/>
            </div>
            <div className={classes.messages}>
                <Message id = "1" message="Hi"/>
                <Message id = "2" message="How are you?"/>
                <Message id = "3" message="Hello"/>
                <Message id = "4" message="Yo Yo"/>
            </div>
            <div className={classes.block3}>block3</div>
        </div>
    );
}

export default Dialogs;