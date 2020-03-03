import React from "react";
import classes from './MyPosts.module.css';
import  Post from './Post/Post';


const MyPosts = (props) => {


    /*let postsData = [
        {id : "1", message : "How? are you", counts : "21"},
        {id : "2", message : "Hi you you", counts : "12"},
        {id : "3", message : "Yo yo yo", counts : "121"},
        {id : "4", message : "Yo yo yo", counts : "1221"}
    ];*/

    let postsElement = props.postsData.map(p => <Post id = {p.id} message = {p.message} counts = {p.counts}/>);


    /*let posts = [
        <Post id = {postsData[0].id} message = {postsData[0].message} counts = {postsData[0].counts}/>,
        <Post id = {postsData[1].id} message = {postsData[1].message} counts = {postsData[1].counts}/>,
        <Post id = {postsData[2].id} message = {postsData[2].message} counts = {postsData[2].counts}/>
    ];*/
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }


    return (
        <div className={classes.block3}>
            <div className={classes.data}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                    <br/>
                </div>
            </div>
            <div className={classes.posts}>

                { postsElement }

            </div>
            </div>
        </div>
    );
}

export default MyPosts;