import axios from "axios";
import { useContext, useState } from "react";
import AllMessagesContext from "../../context/AllMessagesContext";

const NewMesagge = () => {
    const {content, setContent} = useContext(AllMessagesContext);
    const [NewMesaggeForm, setNewMesaggeForm] = useState({"user" : "", "text": ""})
    const setValues = (e,name) => {
        setNewMesaggeForm({...NewMesaggeForm, [name]: e.target.value})
        console.log(NewMesaggeForm)
    }
    const createMessage = () => {
        axios.post(import.meta.env.VITE_URL_POST, {
            user: NewMesaggeForm.user, text: NewMesaggeForm.text 
        }).then((res) => {setContent([...content, res.data])})
    }
    return (
        <div>
            {/*aqui se escriben los mensajes */}
            <form action="#" onSubmit={(e) => {e.preventDefault()
                createMessage()
            }}>
                <label htmlFor="user">UserName</label>
                <input type="text" name="user" id="user" value={NewMesaggeForm.user} onChange={(e) => setValues(e, "user")}/>
                <label htmlFor="user">Message</label>
                <textarea name="mesagge" id="mesagges" placeholder="Add a comment..." value={NewMesaggeForm.text} onChange={(e) => setValues(e, "text")}></textarea>
                <button type="submit">sent</button>
            </form>
        </div>
    );
}

export default NewMesagge;
