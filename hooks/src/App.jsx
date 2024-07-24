import { useState } from 'react'
import './App.css'

//Lookup react memo for an alternative to this solution

function App() {
  return (
    <>
      <HeaderWithButton/>
      <Header title="Number"></Header>
      </>
  )
}

function HeaderWithButton() { 
  const [title, setTitle] = useState("My name is Andrew");

  function updateTitle() { 
    setTitle(`My name is ${(Math.random()*10).toFixed(2)}`);
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={title}></Header>
    </div>
  )

}

function Header({ title }) { 
  return <div>
    { title }
  </div>
}

export default App
