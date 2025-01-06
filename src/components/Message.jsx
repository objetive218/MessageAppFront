/* eslint-disable react/prop-types */
import { useState } from "react";
import ChangeForm from "./ChangeForm";

const Message = ({element}) => {
    const [showForm, setShowForm]= useState(false);
    return (
        <div>
            <h3 key={element._id}>{element.user}</h3>
            <h1>{element.title}</h1>
            <p>{element.text}</p>
            {showForm?<ChangeForm infoMessage={element} setShowForm={setShowForm}/>: ""}
            <button onClick={() => setShowForm(!showForm)}>Edit</button>
        </div>
    );
}

export default Message;
