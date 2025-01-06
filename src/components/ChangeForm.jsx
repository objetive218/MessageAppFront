import axios from "axios";
import { useContext, useMemo, useRef, useState } from "react";
import AllMessagesContext from "../../context/AllMessagesContext";

const ChangeForm = ({infoMessage}) => {
    const { content,setContent } = useContext(AllMessagesContext)
    const [editedMessage, setEditedMessage] = useState({});
    const actualMessage = useMemo((e) => {
        return content.filter((e) => e !== infoMessage)
    },[]) 
    const changeMessage = () => {
        axios.put(`${import.meta.env.VITE_URL_POST}:${infoMessage._id}`,{
            user: editedMessage.user, title: editedMessage.title, text: editedMessage.text
        }).then((res) => {
            setContent([actualMessage, res.data])
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
                <input type="text" name="title" id="title" placeholder={infoMessage.title} value={infoMessage.title} onChange={(e) => setValues(e, "title")} />
                <label htmlFor="user">UserName</label>
                <input type="text" name="user" id="user" placeholder={infoMessage.user} value={infoMessage.user} onChange={(e) => setValues(e, "user")} />
                <label htmlFor="user">Message</label>
                <textarea name="mesagge" id="mesagges" placeholder={infoMessage.text} value={infoMessage.text} onChange={(e) => setValues(e, "text")}></textarea>
                <button type="submit">sent</button>
            </form>
        
    );
}

export default ChangeForm;
