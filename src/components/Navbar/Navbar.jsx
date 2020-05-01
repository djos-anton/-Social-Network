import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsNavBar from "./FriendsNavBar/FriendsNavBar";
import FriendsNavBarContainer from "./FriendsNavBar/FriendsNavBarContainer";



const Navbar = (props) => {

    //=>>>>>>>>>>>let state = props.store.getState().sideBar;

    /*let friend = [
        {id : "6", name : "VolodFo", img : "/img/vov250.png"},
        {id : "4", name : "AndruhK", img : "/img/and250.png"},
        {id : "2", name : "IvasShv", img : "/img/vas250.png"}
    ];*/

    return (
        <div className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/group" activeClassName={classes.active}>Group</NavLink>
            </div>

            {/*<FriendsNavBar friend = {props.state.friend}/>*/}
            <FriendsNavBarContainer /*friend = {state.friend}*//>

        </div>
    );
}

export default Navbar;