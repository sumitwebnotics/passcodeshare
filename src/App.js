import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // keep Home eager for LCP

// Lazy-load non-critical routes
const SecretView = lazy(() => import('./SecretView'));
const About = lazy(() => import('./About'));
const Faq = lazy(() => import('./Faq'));
const Contact = lazy(() => import('./Contact'));
const Donate = lazy(() => import('./Donate'));
const CreateAccount = lazy(() => import('./CreateAccount'));
const LoginPage = lazy(() => import('./LoginPage'));
const ProfilePage = lazy(() => import('./profilePage'));
const Terms = lazy(() => import('./Terms'));
const Privacy = lazy(() => import('./Privacy'));
const Legal = lazy(() => import('./Legal'));
const NotFound = lazy(() => import('./NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
