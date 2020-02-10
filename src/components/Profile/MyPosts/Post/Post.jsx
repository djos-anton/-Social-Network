import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="/img/bel.png"/>
            {props.message}
            <br/>
            <span>{props.counts}</span>
        </div>
    );
}

export default Post;