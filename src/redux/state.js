//const ADD_POST = "ADD-POST";
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

//const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
//const SEND_MESSAGE = "SEND-MESSAGE";

//const UPDATE_NEW_TRAIN_MESSAGE_BODY = "UPDATE-NEW-TRAIN-MESSAGE-BODY";
//const SEND_TRAIN_MESSAGE = "SEND-TRAIN-MESSAGE";

import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _state : {
        profilePage : {
            postsData : [
                {id : "1", message : "How? are you", counts : "21"},
                {id : "2", message : "Hi you you", counts : "12"},
                {id : "3", message : "Yo1 yo yo", counts : "121"},
                {id : "4", message : "Yo2 you yo", counts : "1221"}
            ],
            newPostText: 'social_set'
        },
        messagesPage : {
            dialogs : [
                {id : "1", name : "UchGoda", img : "/img/ug250.png"},
                {id : "2", name : "IvasShv", img : "/img/vas250.png"},
                {id : "3", name : "EgoruBr", img : "/img/eg250.png"},
                {id : "4", name : "AndruhK", img : "/img/and250.png"},
                {id : "5", name : "VladMel", img : "/img/vl250.png"},
                {id : "6", name : "VolodFo", img : "/img/vov250.png"}
            ],
            messages : [
                {id : "1", message : "Hi"},
                {id : "2", message : "How are you?"},
                {id : "3", message : "Hello"},
                {id : "4", message : "Yo Yo"}
            ],
            traMessages : [
                {id : "1", trainingMessage : "Ho Hi Ha"},
                {id : "2", trainingMessage : "Yo Yo Yo"}
            ],
            newMessageBody: "",
            newTrainMessageBody: ""
        },
        sideBar : {
            friend : [
                {id : "6", name : "VolodFo", img : "/img/vov250.png"},
                {id : "4", name : "AndruhK", img : "/img/and250.png"},
                {id : "2", name : "IvasShv", img : "/img/vas250.png"}
            ]
        }
    },
    _callSubscriber()  {
        console.log('state changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

        /*if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: /!*postMessage*!/ this._state.profilePage.newPostText,
                counts: 7
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = "";
            this._state.messagesPage.messages.push({id:7, message : body });
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_TRAIN_MESSAGE_BODY) {
            this._state.messagesPage.newTrainMessageBody = action.trainBody;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_TRAIN_MESSAGE) {
            let trainBody = this._state.messagesPage.newTrainMessageBody;
            this._state.messagesPage.newTrainMessageBody = "";
            this._state.messagesPage.traMessages.push({id:5, trainingMessage : trainBody });
            this._callSubscriber(this._state);
        }*/
    }

    /*addPost() {
        let newPost = {
            id: 5,
            message: /!*postMessage*!/ this._state.profilePage.newPostText,
            counts: 7
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },*/
    /*updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/

}

/*export const addPostActionCreator = () => ({ type : ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText : text })*/

/*export const sendMessageCreator = () => ({ type : SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body : body })

export const sendTrainMessageCreator = () => ({ type : SEND_TRAIN_MESSAGE })
export const updateNewTrainMessageBodyCreator = (trainBody) =>
    ({ type: UPDATE_NEW_TRAIN_MESSAGE_BODY, trainBody : trainBody })*/

/*import {rerenderEntireTree} from "../render";*/
/*let rerenderEntireTree = () => {
    console.log('state changed');
}*/

/*import React from "react";*/
/*let postsData = [
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
];*/
/*let friend = [
        {id : "6", name : "VolodFo", img : "/img/vov250.png"},
        {id : "4", name : "AndruhK", img : "/img/and250.png"},
        {id : "2", name : "IvasShv", img : "/img/vas250.png"}
    ];*/

/*let state = {
    profilePage : {
        postsData : [
            {id : "1", message : "How? are you", counts : "21"},
            {id : "2", message : "Hi you you", counts : "12"},
            {id : "3", message : "Yo1 yo yo", counts : "121"},
            {id : "4", message : "Yo2 you yo", counts : "1221"}
        ],
        newPostText: 'social_set'
    },
    messagesPage : {
        dialogs : [
            {id : "1", name : "UchGoda", img : "/img/ug250.png"},
            {id : "2", name : "IvasShv", img : "/img/vas250.png"},
            {id : "3", name : "EgoruBr", img : "/img/eg250.png"},
            {id : "4", name : "AndruhK", img : "/img/and250.png"},
            {id : "5", name : "VladMel", img : "/img/vl250.png"},
            {id : "6", name : "VolodFo", img : "/img/vov250.png"}
        ],
        messages : [
            {id : "1", message : "Hi"},
            {id : "2", message : "How are you?"},
            {id : "3", message : "Hello"},
            {id : "4", message : "Yo Yo"}
        ],
        traMessages : [
            {id : "1", trainingMessage : "training Hi"},
            {id : "2", trainingMessage : "training Yo Yo"}
        ]
    },
    sideBar : {
        friend : [
            {id : "6", name : "VolodFo", img : "/img/vov250.png"},
            {id : "4", name : "AndruhK", img : "/img/and250.png"},
            {id : "2", name : "IvasShv", img : "/img/vas250.png"}
        ]
    }
}*/

/*export const addPost = (/!*postMessage*!/) => {
    let newPost = {
      id: 5,
      message: /!*postMessage*!/ state.profilePage.newPostText,
      counts: 7
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}*/

/*export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}*/

/*export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}*/

export default store;
window.store = store;