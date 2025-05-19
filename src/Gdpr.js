import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Gdpr() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Frequently Asked Questions</h2>
        <div>
          <h4>What is Passcode Share?</h4>
          <p>Passcode Share is a secure platform for sending one-time, self-destructing links containing sensitive data like passwords, confidential files, or messages.</p>

          <h4>How long does a link stay active?</h4>
          <p>By default, each link expires as soon as it’s accessed once. You can also set custom expiration times.</p>

          <h4>Is my data stored on your servers?</h4>
          <p>No, your data is encrypted end-to-end and is never stored in a readable format on our servers.</p>

          <h4>How do I know my information is secure?</h4>
          <p>We use AES-256-GCM encryption, industry-standard security practices, and no external JavaScript to ensure maximum Gdpr and safety.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gdpr;
