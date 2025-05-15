import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>About Us</h2>
<p>We are committed to delivering secure, one-time link sharing for sensitive information. </p>

<h3>Our Mission</h3>
<p>Our mission is to provide a simple, reliable, and secure way to share confidential data without the risk of unauthorized access. Whether it's passwords, API keys, or other sensitive details, we ensure they are shared safely—only once and only with the intended recipient.</p>

<h3>How It Works</h3>
<p>Secrets are encrypted in your browser before they ever touch our servers. The generated link can be used just once, and once opened, the data is deleted permanently. This zero-knowledge approach guarantees that no one—not even us—can access your information.</p>

<h3>Why Choose Us</h3>
<ul>
  <li><strong>Zero Access:</strong> End-to-end encryption means only the recipient can view the data.</li>
  <li><strong>One-Time Viewing:</strong> Each link self-destructs after a single use for maximum security.</li>
  
</ul>

<h3>Our Commitment</h3>
<p>Security and privacy are at the core of everything we do. We continuously improve our platform to meet the highest standards of data protection, ensuring your trust in every link shared.</p>
 </div>
      <Footer />
    </div>
  );
}

export default About;
