import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SecretView from './SecretView';
import About from './About';
import Faq from './Faq';
import Contact from './Contact';
import Donate from './Donate';
import CreateAccount from './CreateAccount';
import LoginPage from './LoginPage';
import ProfilePage from './profilePage';
import Terms from './Terms';
import Privacy from './Privacy';
import Legal from './Legal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret/:id" element={<SecretView />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/legal-notice" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;
