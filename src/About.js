import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <h1 style={{ color: '#145fff', marginBottom: '1rem' }}>About Us</h1>

  <section style={{ marginBottom: '2rem' }}>
    <p>At Passcode Share, we are committed to delivering a secure and seamless solution for sharing sensitive information through one-time, self-destructing links.</p>
  </section>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>Our Mission</h2>
    <p>Our mission is to offer a simple, reliable, and highly secure way to share confidential data—such as passwords, API keys, or private messages—ensuring that it reaches only the intended recipient, one time only, with zero exposure.</p>
  </section>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>How It Works</h2>
    <p>Secrets are encrypted directly in your browser using strong end-to-end encryption before they ever reach our servers. A unique link is generated that can be accessed only once. Once opened, the encrypted content is permanently deleted—guaranteeing a true zero-knowledge experience.</p>
  </section>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>Why Choose Us</h2>
    <ul>
      <li><strong>Zero Access:</strong> End-to-end encryption ensures only the intended recipient can view the content. Even we can’t access your data.</li>
      <li><strong>One-Time Viewing:</strong> Every link is self-destructing after a single access, preventing data leaks or re-use.</li>
    </ul>
  </section>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>Our Commitment</h2>
    <p>Security and privacy are the foundation of everything we build. We continuously enhance our platform to meet the highest standards of data protection—so you can share with confidence and peace of mind.</p>
  </section>
</div>

      <Footer />
    </div>
  );
}

export default About;
