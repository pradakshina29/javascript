import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      
      <nav>
<ul className="navbar">
    <li><Link to='/'>Home</Link></li>
    <li> <Link to='/About'>About</Link></li>
    <li><Link to='/Services'>Services</Link></li>
    <li><Link to='/Contact'>Contact</Link></li>
</ul>
      </nav>
  
    </div>
  )
}

export default Navbar
