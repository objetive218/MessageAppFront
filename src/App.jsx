import './App.css'
import Messages from './components/Messages'
import NewMesagge from './components/NewMesagge'

function App() {

  return (
    <>
      <div>
        <h1>Messages</h1>
        <NewMesagge />
        <Messages />
      </div>
    </>
  )
}

export default App
