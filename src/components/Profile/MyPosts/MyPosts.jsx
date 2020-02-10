import React from "react";
import classes from './MyPosts.module.css';
import  Post from './Post/Post';

const MyPosts = () => {
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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;