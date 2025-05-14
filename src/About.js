import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>About Us</h2>
        <p>We are committed to delivering secure, one-time link sharing for sensitive information. Trusted by IT teams since 2020.</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
