import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function Faq() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Helmet>
      <title>PasscodeShare FAQ – Secure Sharing Help</title>
      <meta name="description" content="Find answers to common questions about securely sharing passwords and files with PasscodeShare." />
      </Helmet>
      <Header />
      <div style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <h1 style={{ color: '#145fff', marginBottom: '1rem' }}>Frequently Asked Questions (FAQ)</h1>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>1. What is Passcode Share?</h2>
    <p>Passcode Share is a secure platform designed for sending one-time, self-destructing links containing sensitive data such as passwords, confidential files, or messages. Once accessed, the link expires, ensuring that your information is shared safely and privately.</p>
  </section>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>2. How long does a link remain active?</h2>
    <p>By default, each link can only be accessed once and then it expires immediately. However, you have the flexibility to set a custom expiration time if needed—for example, a few minutes, hours, or days.</p>
  </section>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>3. Is my data stored on Passcode Share’s servers?</h2>
    <p>No. All data is encrypted on the client side before transmission and never stored in a readable format on our servers. We follow a strict no-data-retention policy to maintain your privacy.</p>
  </section>

  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{ color: '#145fff' }}>4. How do I know my information is secure?</h2>
    <p>We use AES-256-GCM encryption along with secure HTTPS transmission protocols. Additionally, we do not use any third-party JavaScript, ensuring your data remains private and protected from external tracking or interference.</p>
  </section>
</div>

      <Footer />
    </div>
  );
}

export default Faq;
