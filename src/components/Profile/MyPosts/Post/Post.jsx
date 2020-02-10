import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="/img/bel.png"/>
            {props.message}
            <br/>
            <span>like</span> {props.counts}
        </div>
    );
}

export default Post;