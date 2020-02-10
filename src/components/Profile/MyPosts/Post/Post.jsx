import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="/img/bel.png"/>
            post 1
            <br/>
            <span>like</span>
        </div>
    );
}

export default Post;