import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logos/logo.png';
function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <p>Copyright &copy; {new Date().getFullYear()} <span>Passcodeshare</span></p>
      <div className='links'>

        <Link to="/terms" >Terms of Service</Link>
        <Link to="/privacy" >Privacy Policy</Link>
        <Link to="/gdpr">GDPR Compliance</Link>
        <Link to="/legal">Legal Notice</Link>
      </div>
    </footer>
  );
}

export default Footer;
