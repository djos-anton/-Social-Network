import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*import state, {subscribe} from "./redux/state";*/
import store from "./redux/redux-store";
/*import {addPost, updateNewPostText} from "./redux/state";*/
import {BrowserRouter} from "react-router-dom";
//import {Provider} from "./StoreContext";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
