import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Group from "./components/Group/Group";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import MyPosts from "./components/Profile/MyPosts/MyPosts";


const App = (props) => {

/*    let postsData = [
        {id : "1", message : "How? are you", counts : "21"},
        {id : "2", message : "Hi you you", counts : "12"},
        {id : "3", message : "Yo1 yo yo", counts : "121"},
        {id : "4", message : "Yo2 you yo", counts : "1221"}
    ];*/

    /*let dialogs = [
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
        ];*/

    /*let traMessages = [
    {id : "1", trainingMessage : "training Hi"},
    {id : "2", trainingMessage : "training Yo Yo"}
];*/

    /*let friend = [
        {id : "6", name : "VolodFo", img : "/img/vov250.png"},
        {id : "4", name : "AndruhK", img : "/img/and250.png"},
        {id : "2", name : "IvasShv", img : "/img/vas250.png"}
    ];*/

    return (
        <div className="appWrapper">
            <Header/>
            <Navbar state={props.state.sideBar}/>
            <div className="appWrapperContent">
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage}/>}/>
                <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/>}/>
                <Route path='/group' component={Group}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>
    );
}

export default App;
