import React from "react";
//import classes from './MyPosts.module.css';
//import  Post from './Post/Post';
import {addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
        //props.dispatch(addPostActionCreator());
        /*let text = newPostElement.current.value;*/
        /*props.addPost(/!*text*!/);*/
        //props.addPost();
        /*props.updateNewPostText("");*/
    }

    let onPostChange = (text) => {
        //let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        /*let action = {type: "UPDATE-NEW-POST-TEXT", newText:text };*/
        let action = updateNewPostTextActionCreator(text);
        //props.dispatch(action);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText = { onPostChange } addPost = { onAddPost } postsData = { state.profilePage.postsData }
                 newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;