import React from "react";
//import classes from './MyPosts.module.css';
//import  Post from './Post/Post';
import {addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
//import StoreContext from "./../../../StoreContext";
import {connect} from "react-redux/es/alternate-renderers";

/*const MyPostsContainer = (/!*props*!/) => {

    //let state = props.store.getState();
    /!*let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
        //store.dispatch(addPostActionCreator());
        //props.dispatch(addPostActionCreator());
        /!*let text = newPostElement.current.value;*!/
        /!*props.addPost(/!*text*!/);*!/
        //props.addPost();
        /!*props.updateNewPostText("");*!/
    }*!/
    /!*let onPostChange = (text) => {
        //let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        /!*let action = {type: "UPDATE-NEW-POST-TEXT", newText:text };*!/
        let action = updateNewPostTextActionCreator(text);
        //props.dispatch(action);
        props.store.dispatch(action);
        //store.dispatch(action);
    }*!/
    return (
        <StoreContext.Consumer>
            {(store) => {
                //let state = props.store.getState();
                let state = store.getState();

                let onAddPost = () => {
                    //props.store.dispatch(addPostActionCreator());
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    //props.store.dispatch(action);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={onAddPost}
                                postsData={state.profilePage.postsData}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
            return {
                postsData: state.profilePage.postsData,
                newPostText: state.profilePage.newPostText
            }
}

let mapDispatchToProps = (dispatch) => {
            return {
                updateNewPostText: (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    dispatch(action);
                },
                addPost: () => {
                    dispatch(addPostActionCreator());
                }
            }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;