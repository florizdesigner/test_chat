import React from 'react';
import socket from "../../socket";
import styles from './index.module.css'
import axios from "axios";

const JoinForm = ({ onLogin }) => {
    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const onClickJoin = async () => {
        if (!roomId || !userName) return alert('you don\'t enter all data!')
        console.log(roomId, userName)
        setIsLoading(true)
        await axios.post('/rooms', {
            roomId, userName
        })
        onLogin()
        setIsLoading(false)
    }

    return (
        <div className={styles.form}>
            <input className={styles.form_input} placeholder='your nickname' value={userName} onChange={e => setUserName(e.target.value)}/>
            <input className={styles.form_input} placeholder='id комнаты' value={roomId} onChange={e => setRoomId(e.target.value)}/>
            <button disabled={isLoading} onClick={onClickJoin}>{isLoading ? "входим" : "войти"}</button>
        </div>
    );
};

export default JoinForm;