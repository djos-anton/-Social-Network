import React from "react";
import classes from './MyPosts.module.css';
import  Post from './Post/Post';

const MyPosts = (props) => {
    debugger;
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <button>Add Post</button>
                    <br/>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message = "How? are you" counts = "like 1"/>
                <Post message = "Hi you you" counts = "like 2"/>
                <Post message = "Yo Yo Yo" counts = "like 3"/>
            </div>
        </div>
    );
}

export default MyPosts;