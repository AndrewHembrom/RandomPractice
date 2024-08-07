import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Landing from './components/Landing.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={ <Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
