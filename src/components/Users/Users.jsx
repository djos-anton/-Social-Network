import React from 'react';
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/unnamed.png";

const Users = (props) => {

    let getUsers = () => {

        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

                props.setUsers(response.data.items);
            });

            /*props.setUsers(
                [
                    {id : "1",
                        img: "/img/olga.png",
                        followed : false,
                        nameLastName : "ValiaOvch",
                        university : "МГУ",
                        location: {town : "Севастополь", street : "Зуйская, 15"}},
                    {id : "2",
                        img: "/img/olga.png",
                        followed : true,
                        nameLastName : "KsushaTih",
                        university : "ПрибороТракторный",
                        location: {town : "Керчь", street : "Пушкина, 33"}},
                    {id : "3",
                        img: "/img/olga.png",
                        followed : true,
                        nameLastName : "NastiaKork",
                        university : "Юридический",
                        location: {town : "Симферополь", street : "Киевская, 24"}},
                    {id : "4",
                        img: "/img/olga.png",
                        followed : false,
                        nameLastName : "OlgaChig",
                        university : "ТНУ",
                        location: {town : "Бахчисарай", street : "Ленина, 25"}}
                ]
            );*/
        }
    }
    return (
        <div className={classes.users}>
            <div className={classes.people}>
                <button onClick={getUsers}>GET USERS</button>
                {
                    props.users.map(u => <div key={u.id}>
                        <div className={classes.peopleAvatar}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div className={classes.peopleData}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{"u.location.town"}</div>
                            <div>{"u.location.street"}</div>
                            <br/>
                        </div>
                        <div className={classes.peopleButton}>
                            {u.followed
                                ? <button className={classes.buttonAdd} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Добавить в друзья</button>
                                : <button className={classes.buttonRemove} onClick={() => {
                                    props.follow(u.id)
                                }}>Удалить из друзей</button>}

                        </div>
                    </div>)
                }
            </div>
            <div className={classes.news}>
                news
            </div>
        </div>
    )
}

export default Users;

