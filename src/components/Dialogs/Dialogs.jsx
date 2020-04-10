import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TrainingMessage from "./TrainingMessage/TrainingMessage";
import {
    sendMessageCreator,
    sendTrainMessageCreator,
    updateNewMessageBodyCreator,
    updateNewTrainMessageBodyCreator
} from "../../redux/messagesReducer";
import {placeholder} from "@babel/types";





const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    /*let traMessages = [
        {id : "1", trainingMessage : "training Hi"},
        {id : "2", trainingMessage : "training Yo Yo"}
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

    /*let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id = {dialog.id} name = {dialog.name} img = {dialog.img}/>);*/
    let dialogsElements = state.dialogs.map(dialog => <DialogItem id = {dialog.id} name = {dialog.name} img = {dialog.img}/>);

    /*let messagesElements = props.state.messages.map(message => <Message id = {message.id} message= {message.message}/>);*/
    let messagesElements = state.messages.map(message => <Message id = {message.id} message= {message.message}/>);

    /*let trainingMess = props.state.traMessages.map(trainingmess => <TrainingMessage id = {trainingmess.id} trainingMessage = {trainingmess.trainingMessage}/>);*/
    let trainingMess = state.traMessages.map(trainingmess => <TrainingMessage id = {trainingmess.id} trainingMessage = {trainingmess.trainingMessage}/>);

    /*let newMessageBody = props.state.newMessageBody;*/
    let newMessageBody = state.newMessageBody;
    let newTrainMessageBody = state.newTrainMessageBody;

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


    /*let trainingMess = [
        <TrainingMessage id = {traMessages[0].id} trainingMessage = {traMessages[0].trainingMessage}/>,
        <TrainingMessage id = {traMessages[1].id} trainingMessage = {traMessages[1].trainingMessage}/>
    ];*/

    /*let addElementSms = React.createRef();*/

    let onSendTrainMessageClick = () => {
        /*let text = addElementSms.current.value;
        alert(text);*/
        props.store.dispatch(sendTrainMessageCreator())
    }

    let onNewTrainMessageChange = (e) => {
        let trainBody = e.target.value;
        props.store.dispatch(updateNewTrainMessageBodyCreator(trainBody))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>

                { dialogsElements }

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="start writing a message">
                    </textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>

            </div>
            <div className={classes.block3}>
                <div>{trainingMess}</div>
                <div><textarea value={newTrainMessageBody}
                        onChange={onNewTrainMessageChange}
                        placeholder="HO-HO-HO">
                    </textarea></div>
                <div>
                    <button onClick={ onSendTrainMessageClick }>Add sms</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;