import { createContext, useState } from "react";

const AllMessagesContext = createContext(null);
// eslint-disable-next-line react/prop-types
const MessagesProvider = function ({ children }) {
    const [content, setContent] = useState(null);
    const [selectMessage, setSelectMessage] = useState({ "user": "", "text": "", "title": "" })
    return (
        <AllMessagesContext.Provider value={{ content, setContent, selectMessage, setSelectMessage }}>
            {children}
        </AllMessagesContext.Provider>
    );
};
export { MessagesProvider };
export default AllMessagesContext;