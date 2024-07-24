import { useState } from 'react'

function App() {

  return (
    <>
      <HeaderWithButton />
      <Header title="Hello" />
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
      <Header title={ title }></Header>
    </div>
  )
}

function Header({ title }) { 
  return (
    <div>
      { title }
    </div>
  )
}

export default App
