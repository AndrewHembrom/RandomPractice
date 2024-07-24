import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("My name is Andrew");

  function updateTitle() { 
    setTitle(`My name is ${(Math.random()*10).toFixed(2)}`);
  }

  return (
    <>
      <button onClick={updateTitle}>Change the Title</button>
      <Header title={ title }></Header>
        <Header title="Number"></Header>
      </>
  )
}


function Header({ title }) { 
  return <div>
    { title }
  </div>
}

export default App
