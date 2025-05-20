import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function Privacy() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Helmet>
      <title>Privacy Policy | PasscodeShare – Secure Data Sharing</title>
      <meta name="description" content="Learn how PasscodeShare collects, uses, and protects your data when sharing passwords and confidential files via self-destructing links." />
      </Helmet>
      <Header />
      
      <div style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <h1 style={{ color: '#145fff', marginBottom: '1rem' }}>Privacy Policy</h1>

  <section>
    <h2 style={{ color: '#145fff' }}>1. Introduction</h2>
    <p>Passcode Share respects your privacy and is committed to protecting your personal data. This policy outlines our practices regarding the collection, use, and safeguarding of your information.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>2. Information We Collect</h2>
    <p>Passcode Share employs a strict no-data-retention policy. We do not store any personal or sensitive data on our servers. All data is encrypted client-side and is inaccessible to us.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>3. How We Use Information</h2>
    <p>We do not collect or use personal information. Our service merely facilitates secure data transfers, ensuring that your information remains encrypted and private at all times.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>4. Data Security</h2>
    <p>We employ industry-leading AES-256-GCM encryption to ensure your data remains secure. Transmissions occur securely via HTTPS, and no decrypted data ever resides on our servers.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>5. Cookies</h2>
    <p>Passcode Share uses cookies only to maintain session state for secure and efficient service delivery. We do not utilize cookies for tracking or advertising purposes.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>6. Third-Party Links</h2>
    <p>Our site may contain links to external sites that are not operated by us. We are not responsible for the privacy practices or content of these external sites.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>7. Changes to Our Privacy Policy</h2>
    <p>We reserve the right to modify this policy at any time. Updates will be posted on this page, and your continued use of Passcode Share constitutes acceptance of any changes.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>8. Contact</h2>
    <p>If you have questions or concerns regarding this Privacy Policy, please contact us through our provided contact methods or email us at <a href="mailto:hello@passcodeshare.com" style={{ color: '#145fff' }}>hello@passcodeshare.com</a>.</p>
  </section>
</div>


      <Footer />
    </div>
  );
}

export default Privacy;
