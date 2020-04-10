const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST : let newPost = {
            id: 5,
            message: state.newPostText,
            counts: 7
        };
            state.postsData.push(newPost);
            state.newPostText = "";

            return state;

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;

            return state;

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