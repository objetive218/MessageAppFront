import axios from "axios";
import { useContext, useEffect } from "react";
import AllMessagesContext from "../../context/AllMessagesContext";
import Message from "./message";

const Messages = () => {
    const {content, setContent} = useContext(AllMessagesContext);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL_DB}`).then((response) => setContent(response.data.messages)).catch(() => {
        })
    }, [content])

    if (!content) return null;
    return (
        <div>
            {content.map((e) => {
                return <Message key={e._id} element={e}/>
            })}
        </div>
    );
}

export default Messages;
