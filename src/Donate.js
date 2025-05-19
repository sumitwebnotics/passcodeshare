import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Donate() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Support Our Mission</h2>
        <p>
          Passcode Share is committed to providing secure, privacy-first tools for sensitive data sharing.
          Your donations help us improve our platform, add new features, and keep the service running for everyone.
        </p>
        <p>If you’d like to support us, you can donate through the following methods:</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
          <li>
            <strong>PayPal:</strong>{' '}
            <a href="https://donate.stripe.com/3cI5kE7sv6ex30s5LB5kk2x" target="_blank" rel="noopener noreferrer">
            https://donate.stripe.com/3cI5kE7sv6ex30s5LB5kk2x
            </a>
          </li>
         
        </ul>
        <p>Thank you for helping us make secure communication accessible to all!</p>
      </div>
      <Footer />
    </div>
  );
}

export default Donate;
