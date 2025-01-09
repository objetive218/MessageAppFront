/* eslint-disable react/prop-types */
import { useState } from "react";
import ChangeForm from "./ChangeForm";
import axios from "axios";

const Message = ({element}) => {
    const [showForm, setShowForm]= useState(false);
    const deleteMessage = () => {
        axios.delete(`${import.meta.env.VITE_URL_DELETE}${element._id}`).then((res) => console.log(res))
    }
    return (
        <div>
            <h3 key={element._id}>{element.user}</h3>
            <h1>{element.title}</h1>
            <p>{element.text}</p>
            {showForm?<ChangeForm infoMessage={element} setShowForm={setShowForm}/>: ""}
            <button onClick={() => setShowForm(!showForm)}>Edit</button>
            <button onClick={() => {deleteMessage()}}>Delete</button>
        </div>
    );
}

export default Message;
