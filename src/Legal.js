import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Legal() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <h1 style={{ color: '#145fff', marginBottom: '1rem' }}>Legal Notice</h1>

  <section>
    <h2 style={{ color: '#145fff' }}>1. Company Information</h2>
    <p>Passcode Share is a secure data transfer platform dedicated to ensuring encrypted and confidential information exchanges.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>2. Disclaimer</h2>
    <p>The information provided on Passcode Share is for general informational purposes only. We make no representations or warranties regarding the completeness, accuracy, or reliability of this information.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>3. Liability</h2>
    <p>Passcode Share shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services, including any loss or damage due to data breach or unauthorized access resulting from user negligence.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>4. Intellectual Property</h2>
    <p>All content, trademarks, logos, and service marks displayed on this platform are the property of Passcode Share or their respective owners and may not be used without prior written consent.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>5. External Links</h2>
    <p>Our service may contain links to third-party websites. Passcode Share has no control over, and assumes no responsibility for, the content, privacy policies, or practices of these third-party sites.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>6. Jurisdiction</h2>
    <p>Any disputes related to the use of our service shall be governed by the applicable international laws and settled in the appropriate jurisdiction.</p>
  </section>

  <section>
    <h2 style={{ color: '#145fff' }}>7. Contact Information</h2>
    <p>For legal inquiries or concerns, please contact us via our designated communication channels provided on our website or email us at <a href="mailto:hello@passcodeshare.com" style={{ color: '#145fff' }}>hello@passcodeshare.com</a>.</p>
  </section>
</div>

      <Footer />
    </div>
  );
}

export default Legal;
