import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function SecretView() {
  const { id } = useParams();
  const [secret, setSecret] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/secret/${id}`)
      .then(res => {
        setSecret(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Secret not found or already viewed.');
        setLoading(false);
      });
  }, [id]);

  const formatSecretMessage = (message) => {
    return message.replace(/\n/g, '<br />');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        {loading ? (
          <div style={{ color: '#145fff' }}>Loading...</div>
        ) : secret ? (
          <div
            style={{ color: '#145fff', opacity: 0, animation: 'fadeIn 2s forwards' }}
            dangerouslySetInnerHTML={{ __html: formatSecretMessage(secret) }}
          />
        ) : (
          <p style={{ color: 'red', opacity: 0, animation: 'fadeIn 2s forwards' }}>{error}</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SecretView;
