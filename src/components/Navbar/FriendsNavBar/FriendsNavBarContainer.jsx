import React from "react";
import classes from "./FriendsNavBar.module.css";
import Friend from "./Friend/Friend";
import StoreContext from "../../../StoreContext";
import FriendsNavBar from "./FriendsNavBar";
import {connect} from "react-redux/es/alternate-renderers";

/*const FriendsNavBarContainer = () => {

    /!*let friend = [
        {id : "6", name : "VolodFo", img : "/img/vov250.png"},
        {id : "4", name : "AndruhK", img : "/img/and250.png"},
        {id : "2", name : "IvasShv", img : "/img/vas250.png"}
    ];*!/
    /!*let friendsNavbar = [
        <Friend id = {friend[0].id} name = {friend[0].name} img = {friend[0].img}/>,
        <Friend id = {friend[1].id} name = {friend[1].name} img = {friend[1].img}/>,
        <Friend id = {friend[2].id} name = {friend[2].name} img = {friend[2].img}/>
    ];*!/
    /!*let friendsNavbar = props.friend.map(navBarFriends => <Friend id = {navBarFriends.id}
                                                                  name = {navBarFriends.name}
                                                                  img = {navBarFriends.img}/>);*!/

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();

               return <FriendsNavBar friend={state.sideBar.friend}/>
            }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
            return {
                friend: state.sideBar.friend
            }
}

const FriendsNavBarContainer = connect(mapStateToProps)(FriendsNavBar);

export default FriendsNavBarContainer;