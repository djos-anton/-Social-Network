const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users : [
        /*{id : "1", img: "/img/olga.png", followed : false, nameLastName : "ValiaOvch", university : "МГУ", location: {town : "Севастополь", street : "Зуйская, 15"}},
        {id : "2", img: "/img/olga.png", followed : true, nameLastName : "KsushaTih", university : "ПрибороТракторный", location: {town : "Керчь", street : "Пушкина, 33"}},
        {id : "3", img: "/img/olga.png", followed : true, nameLastName : "NastiaKork", university : "Юридический", location: {town : "Симферополь", street : "Киевская, 24"}},
        {id : "4", img: "/img/olga.png", followed : false, nameLastName : "OlgaChig", university : "ТНУ", location: {town : "Бахчисарай", street : "Ленина, 25"}}*/
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                   return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type : FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;