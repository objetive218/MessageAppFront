/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";


const ChangeForm = ({ infoMessage, setShowForm }) => {
    const [editedMessage, setEditedMessage] = useState(infoMessage);

    const changeMessage = () => {
        axios.put(`${import.meta.env.VITE_URL_POST}/${infoMessage._id}`, {
            user: editedMessage.user, title: editedMessage.title, text: editedMessage.text
        }).then((res) => {
            setShowForm(false)
            console.log(res)
        })
    }
    const setValues = (e, name) => {
        setEditedMessage({ ...editedMessage, [name]: e.target.value })
        console.log(editedMessage)
    }
    return (
        <form action="#" onSubmit={(e) => {
            e.preventDefault();
            changeMessage();
        }}>
            <label htmlFor="title">Title</label>
            <input type="text" required name="title" id="title" placeholder={editedMessage.title} value={editedMessage.title} onChange={(e) => setValues(e, "title")} />
            <label htmlFor="user">UserName</label>
            <input type="text" required name="user" id="user" placeholder={editedMessage.user} value={editedMessage.user} onChange={(e) => setValues(e, "user")} />
            <label htmlFor="user">Message</label>
            <textarea name="mesagge" required id="mesagges" placeholder={editedMessage.text} value={editedMessage.text} onChange={(e) => setValues(e, "text")}></textarea>
            <button type="submit">sent</button>
        </form>

    );
}

export default ChangeForm;
