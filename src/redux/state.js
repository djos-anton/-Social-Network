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

import {rerenderEntireTree} from "../render";

let state = {
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
}

window.state = state;

export let addPost = (/*postMessage*/) => {
    let newPost = {
      id: 5,
      message: /*postMessage*/ state.profilePage.newPostText,
      counts: 7
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;