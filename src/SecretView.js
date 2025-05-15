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
  const [viewcontent, setViewcontent] = useState(true); // Initially, content is hidden
  const apiUrl = process.env.REACT_APP_API_URL;

  const extractIdFromLocation = () => {
    const cleanedId = id.split('&')[0]; // Remove any query params (after &)
    return cleanedId || id;
  };

  const idValue = extractIdFromLocation();  // Cleaned ID value

  useEffect(() => {
    axios.get(`${apiUrl}/secret/${idValue}`)
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

  const handleViewSecret = () => {
    setViewcontent(false); // Set the viewcontent to false to display the secret
    
    axios.get(`${apiUrl}/secret/${idValue}&type=view`)
    .then(res => {
      setSecret(res.data);
      setLoading(false);
    })
    .catch(() => {
      setError('Secret not found or already viewed.');
      setLoading(false);
    });

  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Header />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        {loading ? (
          <div style={{ color: '#145fff' }}>Loading...</div>
        ) : secret ? (
    <div>
      <h5 style={{fontWweight: '400',
    fontSize: '32px',
    lineHeight: '36px',
    textAlign: 'center',
    color: '#0862F7',
    margin: '0 0 25px'}}>You have received the following confidential information:</h5>
          
          {!viewcontent ? (
            <div
              style={{ color: '#145fff', opacity: 0, animation: 'fadeIn 2s forwards' }}
              dangerouslySetInnerHTML={{ __html: formatSecretMessage(secret) }}
            />
         
          ) : (
            <button style={{ background: '#0862f7',
              border: 'none',
              color: '#fff',
              padding: '15px 35px',
              borderRadius: '10px',
            cursor:'pointer'}} onClick={handleViewSecret}>View Secret</button>
          )}

          <p>All secrets are encrypted and decrypted directly within your browser, ensuring that they remain completely private. We are never able to access or view the contents, as only the original, browser-generated link can unlock the information.</p>
          </div>
        ) : (
          <div>
          <p>This link has already been accessed, and the secret it contained has been viewed. For security reasons, the secret is no longer available in our system. </p>
          <p style={{
  color: 'red',
  opacity: 0,
  animation: 'fadeIn 2s ease 0s 1 normal forwards running',
  padding: '30px',
  background: '#cab7b7',
  margin: '35px 0',
  display: 'block',
  borderRadius: '15px'
}}>
  {error}
</p>
          <p>The link you used to access a secret has already been opened. For security purposes, each link is valid for a single use only, so the secret cannot be viewed again through this link.

Please inform the sender that the link did not work, as it is possible that someone else may have accessed the secret before you.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SecretView;
