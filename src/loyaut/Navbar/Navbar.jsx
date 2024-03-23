import React from 'react'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='Navbar'>
      <NavLink to={"/"}>Home</NavLink>
    </nav>
  )
}

export default Navbar
