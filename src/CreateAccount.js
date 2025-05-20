import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'; // Importing reCAPTCHA
import { useNavigate } from 'react-router-dom'; // For redirect after login
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

// Remember to use your own reCAPTCHA site key from Google
const RECAPTCHA_SITE_KEY = '6LfQqDYrAAAAAJ21W-fTkpLR77ehdwpdhl_bGsys';

function CreateAccount() {
  // State hooks for form fields
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [mobile_number, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    // Simple validation check
    if (password !== password_confirmation) {
      setError('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    // CAPTCHA check
    if (!captchaValue) {
      setError('Please verify the CAPTCHA.');
      setIsSubmitting(false);
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/register`, {
        email,
        first_name,
        last_name,
        mobile_number,
        password,
        password_confirmation,
        captchaValue,
      });

      if (response.data.message) {
        setSuccess(response.data.message);  // Set the success message from the response
      }

      setIsSubmitting(false);

       // Show success message and then redirect to profile after 2 seconds
       setTimeout(() => {
        navigate('/login'); // Redirect to profile page
      }, 4000); // 2 seconds delay

    } catch (err) {
      if (err.response.data.errors.email) {
        setError(err.response.data.errors.email);
      } else {
        setError('Something went wrong');
      }

      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Helmet>
    <title>Create an Account – PasscodeShare</title>
<meta name="description" content="Join PasscodeShare today to securely send one-time links with sensitive information. Creating an account is fast and easy." />

    </Helmet>
   
      <Header />
      <div className="create-account-page" style={styles.container}>
        <h2 style={styles.heading}>Create Account</h2>
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

          {/* First Name Field */}
          <label htmlFor="first-name" style={styles.label}>First Name</label>
          <input
            type="text"
            id="first-name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
            required
            style={styles.input}
          />

          {/* Last Name Field */}
          <label htmlFor="last-name" style={styles.label}>Last Name</label>
          <input
            type="text"
            id="last-name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Your last name"
            required
            style={styles.input}
          />

          {/* Mobile Number Field */}
          <label htmlFor="mobile-number" style={styles.label}>Mobile Number</label>
          <input
            type="text"
            id="mobile-number"
            value={mobile_number}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Your mobile number"
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
            placeholder="At least 8 characters"
            required
            style={styles.input}
          />

          {/* Password Confirmation Field */}
          <label htmlFor="confirm-password" style={styles.label}>Password Confirmation</label>
          <input
            type="password"
            id="confirm-password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="Repeat password"
            required
            style={styles.input}
          />

          {/* Terms and Privacy Checkbox */}
          <div style={styles.checkboxContainer}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" style={styles.checkboxLabel}>I agree to the terms of service.</label>
          </div>


          {/* CAPTCHA */}
          <div style={styles.captchaContainer}>
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY} // Make sure you use your own reCAPTCHA key
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>

          {/* CAPTCHA error message */}
          {captchaValue === null && (
            <div style={styles.captchaErrorMessage}>Please complete the CAPTCHA.</div>
          )}

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} style={styles.submitButton}>
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>

          {error && <div style={styles.errorMessage}>{error}</div>}
          {success && <div style={styles.successMessage}>{success}</div>}
          
        </form>
      </div>
      <Footer />
    </>
  );
}

// Styling for the form and page
const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#0862F7',
    marginBottom: '20px',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    marginBottom: '8px',
    color: '#0862F7',
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
  },
  checkboxContainer: {
    marginTop: '10px',
  },
  checkboxLabel: {
    color: '#333',
    fontSize: '0.9rem',
  },
  captchaContainer: {
    marginTop: '20px',
  },
  captchaErrorMessage: {
    color: 'red',
    fontSize: '0.9rem',
  },
  submitButton: {
    width: '100%',
    padding: '14px 20px',
    backgroundColor: '#0862F7',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '15px',
  },
  successMessage: {
    color: 'green',
    marginBottom: '15px',
  }
};

export default CreateAccount;
