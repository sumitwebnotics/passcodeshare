import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function Terms() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Helmet>
      <title>Terms of Service | PasscodeShare – Secure Link Sharing Platform</title>
      <meta name="description" content="Review PasscodeShare’s Terms of Service to understand the guidelines and policies for securely sharing passwords and confidential files via self-destructing links." />
      </Helmet>
      <Header />
      
      <div style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <h1 style={{ color: '#145fff', marginBottom: '1rem' }}>Terms of Service</h1>

  <section>
    <h2 style={{ color: '#145fff' }}>1. Acceptance of Terms</h2>
    <p>By accessing and using Passcode Share, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>2. Service Description</h2>
    <p>Passcode Share offers secure, self-expiring links for transmitting sensitive information securely. Our service is designed to protect data privacy using client-side encryption technologies.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>3. User Responsibilities</h2>
    <p>You agree to:</p>
    <ul>
      <li>Use our services only for lawful purposes.</li>
      <li>Not use our services for sharing unlawful, harmful, threatening, or inappropriate material.</li>
      <li>Maintain the confidentiality of access credentials.</li>
    </ul>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>4. Prohibited Activities</h2>
    <p>You are prohibited from:</p>
    <ul>
      <li>Attempting to bypass security measures or encryption.</li>
      <li>Engaging in activities that disrupt or compromise our service or infrastructure.</li>
      <li>Misusing our service for phishing, fraud, or any malicious activities.</li>
    </ul>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>5. Data and Privacy</h2>
    <p>All transmitted data is encrypted and never stored on our servers. Refer to our <a href="/privacy-policy" style={{ color: '#145fff' }}>Privacy Policy</a> for detailed information on data handling practices.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>6. Limitation of Liability</h2>
    <p>Passcode Share is provided "as is" without warranties of any kind. We are not liable for damages arising from misuse, unauthorized access, or reliance on our service.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>7. Changes to Terms</h2>
    <p>We reserve the right to update these terms at any time. Continued use after any changes constitutes acceptance of the updated terms.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>8. Governing Law</h2>
    <p>These terms are governed by and interpreted according to applicable international laws. Any disputes shall be resolved in the competent jurisdiction.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>9. Contact</h2>
    <p>For questions regarding these Terms of Service, please contact us via our provided contact methods or at <a href="mailto:hello@passcodeshare.com" style={{ color: '#145fff' }}>hello@passcodeshare.com</a>.</p>
  </section>
</div>


      <Footer />
    </div>
  );
}

export default Terms;
