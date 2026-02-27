import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Taylor & A.J.</Link>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/rsvp" onClick={() => setMenuOpen(false)}>RSVP</Link></li>
        <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
        <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
        <li><Link to="/travel" onClick={() => setMenuOpen(false)}>Travel</Link></li>
        <li><Link to="/wedding-party" onClick={() => setMenuOpen(false)}>Wedding Party</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/registry" onClick={() => setMenuOpen(false)}>Registry</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar