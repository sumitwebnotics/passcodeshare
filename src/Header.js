import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logos/logo.png';
import donateIcon from './assets/logos/donate-icon.svg';
import toggleMenu from './assets/toggle-menu.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if token exists in localStorage
  const token = localStorage.getItem('token');

  return (
    <header className="header">

      <div className='container'>
        <h1>
          <Link to="/" className="header-logo-link">
            <img src={logo} alt="logo" className="header-logo-img" />
          </Link>
        </h1>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={toggleMenu} alt="menu" />
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/donate" className="donate"><img src={donateIcon} alt="donate" /> Donate</Link>
          {/* Conditionally render links based on the token */}
          {token ? (
            // If token exists, show Profile link
            <Link to="/profile">Profile</Link>
          ) : (
            // If token does not exist, show Login and Register links
            <>
              <Link to="/login">Login</Link>
              <Link to="/create-account">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
