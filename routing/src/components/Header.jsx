import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header style={{background: "blue"}}>
        <div className='link' style={{color: "red"}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
        </div>
    </header>
  )
}

export default Header
