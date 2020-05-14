import React from 'react';
import classes from './Music.module.css';
import Song from "./Song/Song"


let songData = [
    {id : 1, song : "Maccasio"}, {id : 1, song : "Xama"}, {id : 1, song : "Shakira"}
]

/*let songElement =
    [
        <Song id = {songData[0].id} song = {songData[0].song} />,
        <Song id = {songData[1].id} song = {songData[1].song} />,
        <Song id = {songData[2].id} song = {songData[2].song} />
    ]*/

let songElement = songData.map(s => <Song id = {s.id} song = {s.song} />);

const Music = (props) => {
    return (
        <div  className={classes.music}>
            <div className={classes.songs}>

                {songElement}

            </div>
            <div className={classes.friendsMusic}>
                Friends Music
            </div>
        </div>
    );
}

export default Music;