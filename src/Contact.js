import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const apiUrl = process.env.REACT_APP_API_URL; // Make sure to add the correct API URL in the .env file

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simple validation check
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/contact`, form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccess(response.data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
        <p style={{ textAlign: 'center' }}>
          We’re here to help. Whether you have a question about our service, need support, or want to provide feedback, don’t hesitate to reach out.
        </p>

        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ccc', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#145fff',
              color: '#fff',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {loading ? 'Sending message...' : 'Send Message'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
