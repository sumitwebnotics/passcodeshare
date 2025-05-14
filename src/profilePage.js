import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for redirection
import Header from './Header'; // Assuming you already have a Header component
import Footer from './Footer'; // Assuming you already have a Footer component

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logoutMessage, setLogoutMessage] = useState(''); // State to hold logout message
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token is found, redirect to login page
      navigate('/login');
      return;
    }

    // Fetch user data with the token
    const fetchUserData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${apiUrl}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]); // Add navigate to dependencies to trigger redirection if token is not found

  // If loading, display loading text
  if (loading) return <div>Loading...</div>;

  // Logout function
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Set the logout success message
    setLogoutMessage('Successfully logged out!');

    // After a brief moment, redirect to login page
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Wait 2 seconds before redirecting to the login page
  };

  return (
    <>
      <Header />
      <div className="profile-container" style={styles.container}>
        <h2 style={styles.heading}>Profile</h2>
        {logoutMessage && (
          <div style={styles.logoutMessage}>{logoutMessage}</div>
        )}
        {user ? (
          <div style={styles.userDetails}>
            <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Mobile Number:</strong> {user.mobile_number}</p>
            {/* Add any other fields you want to display */}
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </div>
        ) : (
          <p>No user data available.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

// Styles for Profile Page
const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#0862F7',
    marginBottom: '20px',
    textAlign: 'center',
  },
  logoutMessage: {
    color: 'green',
    textAlign: 'center',
    fontSize: '1.1rem',
    marginBottom: '15px',
  },
  userDetails: {
    textAlign: 'left',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '20px',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default ProfilePage;
