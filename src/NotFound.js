
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Helmet>
        <title>Page Not Found – PasscodeShare</title>
<meta name="description" content="Oops! The page you're looking for doesn't exist. Return to PasscodeShare to securely share your secrets." />

        </Helmet>
        <Header />
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Footer />
    </div>
  );
};

export default NotFound;
