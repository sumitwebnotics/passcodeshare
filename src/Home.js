import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { QRCodeCanvas } from 'qrcode.react';
import Header from './Header';
import Footer from './Footer';
import mondayLogo from './assets/logos/monday.png';
import thermatruLogo from './assets/logos/thermatru.png';
import biontechLogo from './assets/logos/biontech.png';
import focusitLogo from './assets/logos/focusit.png';
import createIcon from './assets/logos/createIcon.svg';
import featureImg from './assets/logos/Features.svg';
import secureChat from './assets/logos/Secure chats with one-time links.svg';
import itTeam from './assets/logos/Ideal for IT teams of all sizes.svg';
import trustedImg from './assets/logos/Developed with standard, security-proven technologies.svg';
import { FiCopy } from 'react-icons/fi'; // Feather's copy icon
import LogoCarousel from './LogoCarousel';



const countries = [
  { name: 'United States', code: 'EN', flag: '🇺🇸' },
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
  { name: 'Mexico', code: 'MX', flag: '🇲🇽' },
  { name: 'South Korea', code: 'KR', flag: '🇰🇷' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'China', code: 'CN', flag: '🇨🇳' },
  { name: 'Russia', code: 'RU', flag: '🇷🇺' },
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦' },
  { name: 'Argentina', code: 'AR', flag: '🇦🇷' },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬' },
  { name: 'Nigeria', code: 'NG', flag: '🇳🇬' },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰' },
  { name: 'Egypt', code: 'EG', flag: '🇪🇬' },
  { name: 'Thailand', code: 'TH', flag: '🇹🇭' },
  { name: 'Indonesia', code: 'ID', flag: '🇮🇩' },
  { name: 'Turkey', code: 'TR', flag: '🇹🇷' },
  { name: 'Vietnam', code: 'VN', flag: '🇻🇳' },
  { name: 'Philippines', code: 'PH', flag: '🇵🇭' },
  { name: 'Malaysia', code: 'MY', flag: '🇲🇾' },
  { name: 'New Zealand', code: 'NZ', flag: '🇳🇿' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱' },
  { name: 'Belgium', code: 'BE', flag: '🇧🇪' },
  { name: 'Sweden', code: 'SE', flag: '🇸🇪' },
  { name: 'Norway', code: 'NO', flag: '🇳🇴' },
  { name: 'Denmark', code: 'DK', flag: '🇩🇰' },
  { name: 'Finland', code: 'FI', flag: '🇫🇮' },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭' },
  { name: 'Poland', code: 'PL', flag: '🇵🇱' },
  { name: 'Austria', code: 'AT', flag: '🇦🇹' },
  { name: 'Greece', code: 'GR', flag: '🇬🇷' },
  { name: 'Portugal', code: 'PT', flag: '🇵🇹' },
  { name: 'Czech Republic', code: 'CZ', flag: '🇨🇿' },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪' },
  { name: 'Romania', code: 'RO', flag: '🇷🇴' },
  { name: 'Hungary', code: 'HU', flag: '🇭🇺' },
  { name: 'Ukraine', code: 'UA', flag: '🇺🇦' },
  { name: 'Israel', code: 'IL', flag: '🇮🇱' },
  { name: 'Chile', code: 'CL', flag: '🇨🇱' },
  { name: 'Colombia', code: 'CO', flag: '🇨🇴' },
  { name: 'Peru', code: 'PE', flag: '🇵🇪' },
  { name: 'Bangladesh', code: 'BD', flag: '🇧🇩' },
  { name: 'Jordan', code: 'JO', flag: '🇯🇴' },
  { name: 'Kuwait', code: 'KW', flag: '🇰🇼' },
  { name: 'Qatar', code: 'QA', flag: '🇶🇦' },
  { name: 'Bahrain', code: 'BH', flag: '🇧🇭' },
  { name: 'Oman', code: 'OM', flag: '🇴🇲' },
  { name: 'Lebanon', code: 'LB', flag: '🇱🇧' },
  { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰' },
  { name: 'Nepal', code: 'NP', flag: '🇳🇵' },
  { name: 'Mongolia', code: 'MN', flag: '🇲🇳' },
  { name: 'Kazakhstan', code: 'KZ', flag: '🇰🇿' },
  { name: 'Uzbekistan', code: 'UZ', flag: '🇺🇿' },
  { name: 'Turkmenistan', code: 'TM', flag: '🇹🇲' },
  { name: 'Kyrgyzstan', code: 'KG', flag: '🇰🇬' },
  { name: 'Tajikistan', code: 'TJ', flag: '🇹🇯' },
  { name: 'Armenia', code: 'AM', flag: '🇦🇲' },
  { name: 'Georgia', code: 'GE', flag: '🇬🇪' },
  { name: 'Azerbaijan', code: 'AZ', flag: '🇦🇿' },
  { name: 'Belarus', code: 'BY', flag: '🇧🇾' },
  { name: 'Bulgaria', code: 'BG', flag: '🇧🇬' },
  { name: 'Serbia', code: 'RS', flag: '🇷🇸' },
  { name: 'Montenegro', code: 'ME', flag: '🇲🇪' },
  { name: 'North Macedonia', code: 'MK', flag: '🇲🇰' },
  { name: 'Kosovo', code: 'XK', flag: '🇽🇰' }
];


function Home() {
  const [secret, setSecret] = useState('');
  const [link, setLink] = useState('');
  const [fulllink, setFulllink] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('EN'); // Default country
  const qrCodeRef = useRef(null);  // Reference to the QR Code canvas

  const [qrCodeReady, setQrCodeReady] = useState(false);

  const frontendUrl = window.location.origin;


  const apiUrl = process.env.REACT_APP_API_URL;


  const handleSubmit = async () => {
    if (!secret) return alert('Please enter your secret.');
    setLoading(true);
    try {
      const res = await axios.post(
        `${apiUrl}/create-secret`,
        { secret, frontendUrl },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false, // make sure you're not using cookies
        }
      );
      setFulllink(res.data.link);
      setLink(res.data.link);

    } catch (err) {
      console.error('API error:', err.response || err.message);
      alert('Error creating secure link.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fulllink).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const handleChangeCountry = (e) => {
    const { name, value } = e.target;

    // Handle different fields based on the name attribute
    if (name === 'country') {
      setSelectedCountry(value);
      setFulllink(link + "&lg=" + value);
    }
    // Add more conditions here if you have other fields to handle
  };

  const handlePrintQRCode = () => {

    window.print();


  };


  // Mark the QR code as ready when it's rendered
  useEffect(() => {
    if (qrCodeRef.current) {
      setQrCodeReady(true);  // Set QR code as ready when the component is mounted
    }
  }, [fulllink]);






  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className='top-section'>
        <div className='container'>
          <h2>
            Securely Send and Receive Sensitive Data
          </h2>
          <p>
             Trusted Client-side Encrypted Data Transfer Since 2020
          </p>
          <textarea
            rows="4"
            placeholder="Enter your secret. We’ll give you a one-time secure link."
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <br />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className='create-link'
          >
            <img src={createIcon} alt="Create secure link" /> {loading ? 'Creating link...' : 'Create secure link'}
          </button>
          {link && (
            <div className='link_section'>
              <h2>One-time link:</h2>
              <div className="wrp_container">
                <input
                  type="text"
                  value={fulllink}
                  className='link-input'
                  readOnly

                />
                <select
                  name="country"
                  value={selectedCountry}
                  onChange={handleChangeCountry}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      ({country.flag}) {country.name}
                    </option>
                  ))}
                </select>
                <button className='copyBtn' onClick={copyToClipboard} >
                  <FiCopy />
                </button>
              </div>


              <div style={{ textAlign: 'center' }} id="qrCodeContainer">
                {/* QR Code */}
                <QRCodeCanvas
                  ref={qrCodeRef}
                  value={fulllink}
                  size={250}
                />
              </div>

              <div>

                <button className='printBtn' onClick={handlePrintQRCode}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M18.353 14H19c.943 0 1.414 0 1.707-.293C21 13.414 21 12.943 21 12v-1c0-1.886 0-2.828-.586-3.414C19.828 7 18.886 7 17 7H7c-1.886 0-2.828 0-3.414.586C3 8.172 3 9.114 3 11v2c0 .471 0 .707.146.854C3.293 14 3.53 14 4 14h1.647"></path><path d="M6 20.306V12c0-.943 0-1.414.293-1.707C6.586 10 7.057 10 8 10h8c.943 0 1.414 0 1.707.293c.293.293.293.764.293 1.707v8.306c0 .317 0 .475-.104.55c-.104.075-.254.025-.554-.075l-2.184-.728c-.078-.026-.117-.04-.158-.04c-.04 0-.08.014-.158.04l-2.684.894c-.078.026-.117.04-.158.04c-.04 0-.08-.014-.158-.04l-2.684-.894c-.078-.026-.117-.04-.158-.04c-.04 0-.08.014-.158.04l-2.184.728c-.3.1-.45.15-.554.075C6 20.781 6 20.623 6 20.306ZM18 7V5.88c0-1.008 0-1.512-.196-1.897a1.8 1.8 0 0 0-.787-.787C16.632 3 16.128 3 15.12 3H8.88c-1.008 0-1.512 0-1.897.196a1.8 1.8 0 0 0-.787.787C6 4.368 6 4.872 6 5.88V7"></path><path stroke-linecap="round" d="M10 14h3m-3 3h4.5"></path></g></svg> Print QR Code
                </button>
              </div>


              <div >

              </div>
            </div>
          )}
        </div>
      </section>

      {/* Secure Info Section */}
      <section className='secure-info'>

        <div className='container'>
          <h3>Generate Self-Expiring, Secure Links</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div style={{ maxWidth: '297px' }}>
              <h4>Send</h4>
              <p>Create secure, self-expiring links to share sensitive information that automatically becomes inaccessible after one use. Ideal for securely sharing passwords, financial details, confidential business documents, or personal data with complete peace of mind.</p>
            </div>
            <div style={{ maxWidth: '297px' }}>
              <h4>Receive</h4>
              <p>Request confidential information securely from others through unique, self-expiring links. Ideal for ensuring compliance with privacy standards and facilitating secure, traceable data exchange.</p>
            </div>
            <div style={{ maxWidth: '297px' }}>
              <h4>Chat</h4>
              <p>Conduct secure, one-time communications confidently—your messages vanish after reading. Ideal for sensitive, private conversations and secure discussions requiring complete confidentiality.
              Trusted by leading brands including Monday.com, ThermaTru Doors, BioNTech, and FocusIT.</p>
            </div>
          </div>
         
        </div>
        <div className='container-large'>
        <LogoCarousel />
        <p className='note-text'>Trusted by top brands for secure one-time link solutions.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className='features-section'>
        <div className='container'>
          <h3><img src={featureImg} alt="Features" /><span>Key Features</span></h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '460px', textAlign: 'left' }}>
              <h4>Secure, One-Time Links</h4>
              <p>Share sensitive information securely, with automatic deletion after use.<br />Enhanced security with custom expiration settings, link passwords, and CAPTCHA verification.</p>
            </div>
            <div style={{ maxWidth: '460px', textAlign: 'left' }}>
              <h4>Secret Request Links</h4>
              <p>Allow others to send encrypted data directly and securely to you.<br />Ideal for situations requiring privacy-focused, direct data submissions without email or messaging risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className='advanced-section'>
        <div className='container'>
          <h3><img src={secureChat} alt="Advanced Security and Privacy" /><span>Advanced Security and Privacy</span></h3>
          <p>
            Our one-time link technology now includes secure chats, offering a trusted solution for end-to-end encrypted communication.</p>
          <p>Just like our one-time links, these chats are exclusive to the original participants and automatically self-destruct after they’re closed, ensuring full privacy.</p>
          <p>Key features:</p>
          <ul>
            <li><strong>End-to-End Encryption: </strong>All communications are encrypted with industry-leading AES-256-GCM directly in your browser, ensuring your data remains secure throughout transmission.</li>
            <li><strong>Temporary and Private: </strong>Messages are never stored or logged, ensuring only authorized users have access to the data.</li>
            <li><strong>No Data Retention:</strong> Your privacy is our priority—no logs, no stored messages, and no data retention.</li>
          </ul>
        </div>
      </section>
      <section className='advanced-section'>
        <div className='container'>
          <h3><img src={itTeam} alt="Ideal for IT Teams of All Sizes" /><span>Ideal for IT Teams of All Sizes</span></h3>
          <p>Securely share credentials and sensitive information across teams, ensuring complete control and auditability</p>
          <p>Fully customizable for your branding and security policies.</p>
          <p>Integrate seamlessly with your existing systems via our simple REST API.</p>
           </div>
      </section>
      <section className='advanced-section'>
        <div className='container'>
          <h3><img src={trustedImg} alt="Built on Trusted, Secure Technologies" /><span>Built on Trusted, Secure Technologies</span></h3>
          <p>We prioritize your security by employing advanced encryption and industry-best practices:</p>
          <p><strong>Always Encrypted Communications:</strong> </p>
          <p>Secure HTTPS connections guarantee confidentiality during data transmission.</p>
         <p><strong>Robust Security Measures:</strong></p>
         <p>We implement cutting-edge security technologies including strict content policies, secure cookies, and stringent transport security protocols.</p>
           <p><strong>Encryption at Rest and in Transit:</strong></p>
          <p>All data stored is encrypted at rest, providing additional security layers both in the browser and on our servers.</p>
          <p><strong>Unique One-Time Link Generation:</strong></p>
          <p>Secure 18-character random links are created browser-side, ensuring no external exposure or interception.</p>
          <p><strong>No External JavaScript:</strong></p>
          <p>Eliminates injection risks by avoiding third-party scripts on sensitive pages.</p>
          <p><strong>No Logging of Sensitive Data:</strong></p>
          <p>Absolutely no logging of data content or sensitive information.</p>
          <p><strong>Secure Access Controls:</strong></p>
          <p className='mb-0'>Secrets become immediately inaccessible after being retrieved, ensuring absolute confidentiality.</p>
        </div>
      </section>


      <section className="Trusted-section" >
        <div className='container'>
          <h3>Trusted Secure Password Sharing Since 2020</h3>
          <p>
          Our platform, developed with simplicity and security at its core, has become the trusted standard for secure data transmission worldwide.
           </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
