const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const UPDATE_NEW_TRAIN_MESSAGE_BODY = "UPDATE-NEW-TRAIN-MESSAGE-BODY";
const SEND_TRAIN_MESSAGE = "SEND-TRAIN-MESSAGE";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.body;

            return state;

        case SEND_MESSAGE :
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({ id:7, message : body });

            return state;

        case UPDATE_NEW_TRAIN_MESSAGE_BODY :
            state.newTrainMessageBody = action.trainBody;

            return state;

        case SEND_TRAIN_MESSAGE :
            let trainBody = state.newTrainMessageBody;
            state.newTrainMessageBody = "";
            state.traMessages.push({ id:5, trainingMessage : trainBody });

            return state;

        default : return state;
    }

    /*if(action.type === UPDATE_NEW_MESSAGE_BODY) {
        //this._state.messagesPage.newMessageBody = action.body;
        state.newMessageBody = action.body;
        //this._callSubscriber(this._state);

    } else if(action.type === SEND_MESSAGE) {
        //let body = this._state.messagesPage.newMessageBody;
        let body = state.newMessageBody;
        //this._state.messagesPage.newMessageBody = "";
        state.newMessageBody = "";
        //this._state.messagesPage.messages.push({id:7, message : body });
        state.messages.push({id:7, message : body });
        //this._callSubscriber(this._state);

    } else if(action.type === UPDATE_NEW_TRAIN_MESSAGE_BODY) {
        //this._state.messagesPage.newTrainMessageBody = action.trainBody;
        state.newTrainMessageBody = action.trainBody;
        //this._callSubscriber(this._state);

    }else if(action.type === SEND_TRAIN_MESSAGE) {
        //let trainBody = this._state.messagesPage.newTrainMessageBody;
        let trainBody = state.newTrainMessageBody;
        //this._state.messagesPage.newTrainMessageBody = "";
        state.newTrainMessageBody = "";
        //this._state.messagesPage.traMessages.push({id:5, trainingMessage : trainBody });
        state.traMessages.push({id:5, trainingMessage : trainBody });
        //this._callSubscriber(this._state);

    }

    return state;*/
}

export const sendMessageCreator = () => ({ type : SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body : body })

export const sendTrainMessageCreator = () => ({ type : SEND_TRAIN_MESSAGE })
export const updateNewTrainMessageBodyCreator = (trainBody) =>
    ({ type: UPDATE_NEW_TRAIN_MESSAGE_BODY, trainBody : trainBody })

export default messagesReducer;