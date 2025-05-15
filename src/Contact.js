import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact Us</h2>
<p>We’re here to help. Whether you have a question about our service, need support, or want to provide feedback, don’t hesitate to reach out.</p>

<h3>Support</h3>
<p>If you're experiencing issues or have technical questions, please contact our support team at <a href="mailto:hello@mydevit.in">hello@mydevit.in</a>.</p>

<h3>Follow Us</h3>
<p>Stay updated with the latest news and updates:</p>

<h3>Get in Touch</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#145fff',
              color: '#fff',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
