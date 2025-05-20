import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For redirect after login
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    // Simple validation check
    if (!email || !password) {
      setError('Both email and password are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      setSuccess('Login successful!');
      setIsSubmitting(false);

      // Save token in localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      // Show success message and then redirect to profile after 2 seconds
      setTimeout(() => {
        navigate('/profile'); // Redirect to profile page
      }, 2000); // 2 seconds delay
    } catch (err) {
      setError('Invalid email or password.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Helmet>
    <title>Login to Your Account – PasscodeShare</title>
    <meta name="description" content="Securely log in to your PasscodeShare account to access your encrypted links and manage your shared secrets." />
    </Helmet>
      <Header />
      <div className="login-page" style={styles.container}>
        <h2 style={styles.heading}>Login</h2>

        {error && <div style={styles.errorMessage}>{error}</div>}
        {success && <div style={styles.successMessage}>{success}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Email Field */}
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            style={styles.input}
          />

          {/* Password Field */}
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={styles.input}
          />

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} style={styles.button}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto', // Adding margin from top and bottom
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  heading: {
    color: '#0862F7',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '8px',
    color: '#0862F7',
    textAlign:'left'
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '14px 20px',
    backgroundColor: '#0862F7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  successMessage: {
    color: 'green',
    marginBottom: '15px',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '15px',
  }
};

export default LoginPage;
