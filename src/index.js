import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

    let postsData = [
        {id : "1", message : "How? are you", counts : "21"},
        {id : "2", message : "Hi you you", counts : "12"},
        {id : "3", message : "Yo1 yo yo", counts : "121"},
        {id : "4", message : "Yo2 you yo", counts : "1221"}
    ];

let dialogs = [
        {id : "1", name : "Uchitel"},
        {id : "2", name : "Telesic"},
        {id : "3", name : "Egorushka"},
        {id : "4", name : "Andrusha"},
        {id : "5", name : "Vladik"},
        {id : "6", name : "SamiyUmniy"}
    ];

    let messages = [
        {id : "1", message : "Hi"},
        {id : "2", message : "How are you?"},
        {id : "3", message : "Hello"},
        {id : "4", message : "Yo Yo"}
    ];

ReactDOM.render(<App postsData={postsData}
                     dialogs={dialogs}
                     messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
