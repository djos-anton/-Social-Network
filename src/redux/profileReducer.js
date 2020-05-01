const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData : [
        {id : "1", message : "How? are you", counts : "21"},
        {id : "2", message : "Hi you you", counts : "12"},
        {id : "3", message : "Yo1 yo yo", counts : "121"},
        {id : "4", message : "Yo2 you yo", counts : "1221"}
    ],
    newPostText: 'social_set'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newPostText,
                counts: 7
            };
            /*let stateCopy =*/ return {
                ...state,
                newPostText: "",
                postsData: [...state.postsData, newPost]
            };
            //state.postsData.push(newPost);
            //stateCopy.postsData = [...state.postsData];
            //stateCopy.postsData.push(newPost);
            //state.newPostText = "";
            //stateCopy.newPostText = "";
            //return state;
            //return stateCopy;

        case UPDATE_NEW_POST_TEXT :
            /*let stateCopy =*/ return {
                ...state,
                newPostText: action.newText
            };
            //state.newPostText = action.newText;
            //stateCopy.newPostText = action.newText;

            //return state;
            //return stateCopy;

        default : return state;
    }

    /*if(action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: /!*this._state.profilePage.newPostText,*!/ state.newPostText,
            counts: 7
        };
        //this._state.profilePage.postsData.push(newPost);
        //this._state.profilePage.newPostText = "";
        //this._callSubscriber(this._state);
        state.postsData.push(newPost);
        state.newPostText = "";

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //this._state.profilePage.newPostText = action.newText;
        state.newPostText = action.newText;
        //this._callSubscriber(this._state);

    }*/

    //return state;
}

export const addPostActionCreator = () => ({ type : ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText : text })

export default profileReducer;