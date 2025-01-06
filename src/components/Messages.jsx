import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AllMessagesContext from "../../context/AllMessagesContext";
import ChangeForm from "./ChangeForm";

const Messages = () => {
    const {content, setContent} = useContext(AllMessagesContext);
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL_DB}`).then((response) => setContent(response.data.messages)).catch(() => {
        })
    }, [content])

    if (!content) return null;
    return (
        <div>
            {content.map((e) => {
                return (<>
                    <h3 key={e._id}>{e.user}</h3>
                    <h1>{e.title}</h1>
                    <p>{e.text}</p>
                    {/*need only active the form of one message */}
                    <button onClick={() => setShowForm(!showForm)}>Edit</button>
                </>
                )
            })}
        </div>
    );
}

export default Messages;
