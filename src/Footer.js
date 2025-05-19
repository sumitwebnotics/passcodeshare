import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logos/logo.png';
function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo' />
      <p>Copyright &copy; {new Date().getFullYear()} <span>Passcodeshare</span></p>
      <div className='links'>

        <Link to="/terms-of-service" >Terms of Service</Link>
        <Link to="/privacy-policy" >Privacy Policy</Link>
        <Link to="/legal-notice">Legal Notice</Link>
      </div>
    </footer>
  );
}

export default Footer;
