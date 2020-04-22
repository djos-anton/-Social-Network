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
//import StoreContext from "../../StoreContext";
import {connect} from "react-redux/es/alternate-renderers";
/*const DialogsContainer = (/!*props*!/) => {

    //let state = props.store.getState().messagesPage;

    /!*let onSendTrainMessageClick = () => {
        props.store.dispatch(sendTrainMessageCreator());
        //store.dispatch(sendTrainMessageCreator());
    }

    let onNewTrainMessageChange = (trainBody) => {
        props.store.dispatch(updateNewTrainMessageBodyCreator(trainBody));
        //store.dispatch(updateNewTrainMessageBodyCreator(trainBody));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
        //store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
        //store.dispatch(updateNewMessageBodyCreator(body));
    }*!/

    return (
        <StoreContext.Consumer>
            {(store) => {
                //let state = props.store.getState().messagesPage;
                //let state = store.getState().messagesPage;

                let onSendTrainMessageClick = () => {
                    //props.store.dispatch(sendTrainMessageCreator());
                    store.dispatch(sendTrainMessageCreator());
                }

                let onNewTrainMessageChange = (trainBody) => {
                    //props.store.dispatch(updateNewTrainMessageBodyCreator(trainBody));
                    store.dispatch(updateNewTrainMessageBodyCreator(trainBody));
                }

                let onSendMessageClick = () => {
                    //props.store.dispatch(sendMessageCreator());
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body) => {
                    //props.store.dispatch(updateNewMessageBodyCreator(body));
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

               return <Dialogs updateNewMessageBody={onNewMessageChange}
                         updateNewTrainMessageBody={onNewTrainMessageChange}
                         sendMessage={onSendMessageClick}
                         sendTrainMessage={onSendTrainMessageClick}
                         messagesPage={store.getState().messagesPage}/>
            }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        updateNewTrainMessageBody: (trainBody) => {
            dispatch(updateNewTrainMessageBodyCreator(trainBody));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        sendTrainMessage: () => {
            dispatch(sendTrainMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;