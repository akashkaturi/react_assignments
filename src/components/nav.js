import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav>
            <ul className='list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/a1">Assignment1</Link></li>
                <li><Link to="/a2">Assignment2</Link></li>
                <li><Link to="/a3">Assignment3</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav