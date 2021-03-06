import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from "./ProfileData/ProfileData";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    /*let postsData = [
        {id : "1", message : "How? are you", counts : "21"},
        {id : "2", message : "Hi you you", counts : "12"},
        {id : "3", message : "Yo1 yo yo", counts : "121"},
        {id : "4", message : "Yo2 you yo", counts : "1221"}
    ];*/

    return (
        <div className={classes.content}>

            <ProfileInfo/>
            <ProfileData/>
            <MyPostsContainer /*store = {props.store}*/ //postsData={props.profilePage.postsData}
                     //newPostText={props.profilePage.newPostText}
                     //dispatch = {props.dispatch}
                     /*updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}*//>
        </div>
    );
}

export default Profile;