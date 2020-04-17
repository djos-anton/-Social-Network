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
import Dialogs from "./Dialogs";





const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendTrainMessageClick = () => {
        props.store.dispatch(sendTrainMessageCreator())
    }

    let onNewTrainMessageChange = (trainBody) => {
        props.store.dispatch(updateNewTrainMessageBodyCreator(trainBody))
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 updateNewTrainMessageBody={onNewTrainMessageChange}
                 sendMessage={onSendMessageClick}
                 sendTrainMessage={onSendTrainMessageClick}
                 messagesPage={state}
        />
    );
}

export default DialogsContainer;