import React from "react";
import classes from "./Friend.module.css";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={classes.friend}>
            <NavLink to={"/dialogs/" + props.id}>
                <img src={props.img}/>
                <div>{props.name}</div>
            </NavLink>
        </div>
    );
}

export default Friend;