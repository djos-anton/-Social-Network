import React from "react";
import classes from "./FriendsNavBar.module.css";
import Friend from "./Friend/Friend";
import StoreContext from "../../../StoreContext";

const FriendsNavBar = (props) => {

    let friendsNavbar = props.friend.map(navBarFriends => <Friend id = {navBarFriends.id}
                                                                  name = {navBarFriends.name}
                                                                  img = {navBarFriends.img}
                                                                  key = {navBarFriends.id}/>);

    /*<<<<<<<<======*/
    //let state = props.store.getState().sideBar;

    /*let friend = [
        {id : "6", name : "VolodFo", img : "/img/vov250.png"},
        {id : "4", name : "AndruhK", img : "/img/and250.png"},
        {id : "2", name : "IvasShv", img : "/img/vas250.png"}
    ];*/

    /*let friendsNavbar = [
        <Friend id = {friend[0].id} name = {friend[0].name} img = {friend[0].img}/>,
        <Friend id = {friend[1].id} name = {friend[1].name} img = {friend[1].img}/>,
        <Friend id = {friend[2].id} name = {friend[2].name} img = {friend[2].img}/>
    ];*/

    /*let friendsNavbar = props.friend.map(navBarFriends => <Friend id = {navBarFriends.id}
                                                                  name = {navBarFriends.name}
                                                                  img = {navBarFriends.img}/>);*/

    return (
            <div className={classes.friends}>
            <div>Frients</div>

            { friendsNavbar }

        </div>
    );
}

export default FriendsNavBar;