import { createContext, useState } from "react";

const AllMessagesContext = createContext(null);
// eslint-disable-next-line react/prop-types
const MessagesProvider = function ({ children }) {
    const [content, setContent] = useState(null);
   
    return (
        <AllMessagesContext.Provider value={{ content, setContent }}>
            {children}
        </AllMessagesContext.Provider>
    );
};
export { MessagesProvider };
export default AllMessagesContext;