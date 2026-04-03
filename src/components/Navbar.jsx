import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
        🌿 Ethereal
      </NavLink>

      <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Services</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
      </div>

      <div className="navbar__actions">
        <button
          className="navbar__toggle-mode"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
