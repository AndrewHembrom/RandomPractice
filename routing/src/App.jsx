import { useState , lazy} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Dashboard = lazy(() => import('./components/Dashboard.jsx'))
const Landing = lazy(() => import('./components/Landing.jsx'))
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={ <Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
