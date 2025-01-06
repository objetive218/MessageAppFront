import axios from "axios";
import { useContext, useState } from "react";
import AllMessagesContext from "../../context/AllMessagesContext";

const NewMesagge = () => {
    const { content, setContent, selectMessage, setSelectMessage } = useContext(AllMessagesContext);
    const [showForm, setShowForm] = useState(true);
    const [NewMesaggeForm, setNewMesaggeForm] = useState({ "user": "", "text": "", "title": "" })
    const setValues = (e, name) => {
        setNewMesaggeForm({ ...NewMesaggeForm, [name]: e.target.value })
        console.log(NewMesaggeForm)
    }
    const createMessage = () => {
        axios.post(import.meta.env.VITE_URL_POST, {
            user: NewMesaggeForm.user,title: NewMesaggeForm.title, text: NewMesaggeForm.text
        }).then((res) => { setContent([...content, res.data]) })
    }
    
    return (
        (<div>
            {/*aqui se escriben los mensajes */}
            <form action="#" onSubmit={(e) => {
                e.preventDefault()
                createMessage()
            }}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={NewMesaggeForm.title} onChange={(e) => setValues(e, "title")} />
                <label htmlFor="user">UserName</label>
                <input type="text" name="user" id="user" value={NewMesaggeForm.user} onChange={(e) => setValues(e, "user")} />
                <label htmlFor="user">Message</label>
                <textarea name="mesagge" id="mesagges" placeholder="Add a comment..." value={NewMesaggeForm.text} onChange={(e) => setValues(e, "text")}></textarea>
                <button type="submit">sent</button>
                
            </form>
        </div>) 
    );
}

export default NewMesagge;
