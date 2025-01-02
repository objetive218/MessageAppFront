import axios from "axios";
import { useContext, useEffect } from "react";
import AllMessagesContext from "../../context/AllMessagesContext";

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
                return (<>
                    <h1 key={e._id}>{e.user}</h1>
                    <p>{e.text}</p>
                </>
                )
            })}
        </div>
    );
}

export default Messages;
