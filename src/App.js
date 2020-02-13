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


function App() {
    return (
        <BrowserRouter>
        <div className="appWrapper">
            <Header/>
            <Navbar/>
            <div className="appWrapperContent">
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/group' component={Group}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
