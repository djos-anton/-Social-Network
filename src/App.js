import React from 'react';
import './App.css';


function App() {
    return (
        <div className="appWrapper">
            <header className="header">
                <img src="/img/gor.png" alt=""/>
            </header>
            <nav className="nav">
                <div className="item">
                    <a href="#">Profile</a>
                </div>
                <div className="item">
                    <a href="#">Messages</a>
                </div>
                <div className="item">
                    <a href="#">News</a>
                </div>
                <div className="item">
                    <a href="#">Music</a>
                </div>
                <div className="item">
                    <a href="#">Group</a>
                </div>
            </nav>
            <div className="content">
                <div className="block1">block1</div>
                <div className="block2">block2</div>
                <div className="block3">block3</div>
            </div>
        </div>
    );
}

export default App;
