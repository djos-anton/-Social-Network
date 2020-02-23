import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

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

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id = {dialog.id} name = {dialog.name}/>);

    let messagesElements = props.state.messages.map(message => <Message id = {message.id} message= {message.message}/>);

    /*let dialogsElements = [
        <DialogItem id = {dialogsData[0].id} name = {dialogsData[0].name}/>,
        <DialogItem id = {dialogsData[1].id} name = {dialogsData[1].name}/>,
        <DialogItem id = {dialogsData[2].id} name = {dialogsData[2].name}/>,
        <DialogItem id = {dialogsData[3].id} name = {dialogsData[3].name}/>,
        <DialogItem id = {dialogsData[4].id} name = {dialogsData[4].name}/>,
        <DialogItem id = {dialogsData[5].id} name = {dialogsData[5].name}/>
    ];*/

    /*let messagesElements =[
        <Message id = {messagesData[0].id} message= {messagesData[0].message}/>,
        <Message id = {messagesData[1].id} message= {messagesData[1].message}/>,
        <Message id = {messagesData[2].id} message= {messagesData[2].message}/>,
        <Message id = {messagesData[3].id} message= {messagesData[3].message}/>
    ]*/

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>

                { dialogsElements }

            </div>
            <div className={classes.messages}>

                { messagesElements }

            </div>
            <div className={classes.block3}>block3</div>
        </div>
    );
}

export default Dialogs;