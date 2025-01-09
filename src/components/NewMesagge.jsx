/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext, useState } from "react";
import AllMessagesContext from "../../context/AllMessagesContext";

const NewMesagge = ({ setShowFormNew }) => {
    const { content, setContent} = useContext(AllMessagesContext);
    const [NewMesaggeForm, setNewMesaggeForm] = useState({ "user": "", "text": "", "title": "" })
    const setValues = (e, name) => {
        setNewMesaggeForm({ ...NewMesaggeForm, [name]: e.target.value })
        console.log(NewMesaggeForm)
    }
    const createMessage = () => {
        axios.post(import.meta.env.VITE_URL_POST, {
            user: NewMesaggeForm.user, title: NewMesaggeForm.title, text: NewMesaggeForm.text
        }).then((res) => {
            setContent([...content, res.data])
            setShowFormNew(false)
        })
    }

    return (
        (<div>
            {/*aqui se escriben los mensajes */}
            <form action="#" onSubmit={(e) => {
                e.preventDefault()
                createMessage()
            }}>
                <label htmlFor="title">Title</label>
                <input type="text" required name="title" id="title" minLength={1} maxLength={50} value={NewMesaggeForm.title} onChange={(e) => setValues(e, "title")} />
                <label htmlFor="user">UserName</label>
                <input type="text" required name="user" id="user"  maxLength={50} value={NewMesaggeForm.user} onChange={(e) => setValues(e, "user")} />
                <label htmlFor="user">Message</label>
                <textarea name="mesagge" required id="mesagges" maxLength={250} placeholder="Add a comment..." value={NewMesaggeForm.text} onChange={(e) => setValues(e, "text")}></textarea>
                <button type="submit">sent</button>

            </form>
        </div>)
    );
}

export default NewMesagge;
