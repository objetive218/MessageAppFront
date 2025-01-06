import { useState } from 'react'
import './App.css'
import Messages from './components/Messages'
import NewMesagge from './components/NewMesagge'

function App() {
  const [showFormNew, setShowFormNew] = useState(false)
  return (
    <>
      <div>
        <button onClick={() => setShowFormNew(true)}>+</button>
        {showFormNew ? <NewMesagge setShowFormNew={setShowFormNew} /> : ""}
        <h1>Messages</h1>
        <Messages />
      </div>
    </>
  )
}

export default App
