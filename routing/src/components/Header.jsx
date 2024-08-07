import React from 'react'
import { Link , useNavigate} from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    return (
    <header style={{background: "blue"}}>
        <div className='button'>
            <button onClick={() => navigate("/")}>Landing Page</button>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        </div>
    </header>
  )
}

export default Header
