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
            Transmit and receive sensitive data securely
          </h2>
          <p>
            Trusted for client-side encrypted secret delivery since 2020
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
          <h3>Secure your information with one-time, self-expiring links</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div style={{ maxWidth: '297px' }}>
              <h4>Send</h4>
              <p>Create a secure link to share sensitive information—once accessed, the link expires instantly, leaving no trace behind. Perfect for sharing financial details, confidential agreements, or any private data with complete peace of mind.</p>
            </div>
            <div style={{ maxWidth: '297px' }}>
              <h4>Receive</h4>
              <p>Request data from others and have it delivered through a self-destructing link that ensures complete privacy. Once accessed, the link is deactivated—making the information unrecoverable and fully protected.</p>
            </div>
            <div style={{ maxWidth: '297px' }}>
              <h4>Chat</h4>
              <p>Use our secure one-time links to chat confidentially—once the conversation ends, the link expires, leaving no trace. Ideal for sensitive negotiations or private discussions that require total discretion.</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <img src={mondayLogo} alt="Monday.com" style={{ height: '40px' }} />
            <img src={thermatruLogo} alt="ThermaTru Doors" style={{ height: '40px' }} />
            <img src={biontechLogo} alt="BioNTech" style={{ height: '40px' }} />
            <img src={focusitLogo} alt="FocusIT" style={{ height: '40px' }} />
          </div>
          <p className='note-text'>Trusted by top brands for secure one-time link solutions.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className='features-section'>
        <div className='container'>
          <h3><img src={featureImg} alt="Features" /><span>Features</span></h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '460px', textAlign: 'left' }}>
              <h4>Secure data sharing with one-time links</h4>
              <p>Share passwords, confidential data, and files securely with self-destructing one-time links.<br />Each link can be customized with settings such as expiration time, password protection, and CAPTCHA. You can also control how many times the link can be accessed before it expires.</p>
            </div>
            <div style={{ maxWidth: '460px', textAlign: 'left' }}>
              <h4>Request private data with a Secret Request link</h4>
              <p>Generate a Secret Request link to securely request sensitive data from clients and users.<br />It functions similarly to sharing data via a one-time link, except that you’ll receive a self-destructing link containing the requested data once it’s provided.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className='advanced-section'>
        <div className='container'>
          <h3><img src={secureChat} alt="FeatuEnsure secure conversations with one-time linksres" /><span>Ensure secure conversations with one-time links</span></h3>
          <p>
            Our one-time link technology now includes secure chats, offering a trusted solution for end-to-end encrypted communication.</p>
          <p>Just like our one-time links, these chats are exclusive to the original participants and automatically self-destruct after they’re closed, ensuring full privacy.</p>
          <p>Key features:</p>
          <ul>
            <li><strong>End-to-end encryption: </strong>Every message is encrypted with AES-256-GCM, the industry standard for secure communication. Encryption and decryption happen directly in your browser, ensuring that plain text is never exposed.</li>
            <li><strong>Private and temporary: </strong>The encryption key is only known to the chat participants and is never stored, ensuring that only those initially involved can access the chat content.</li>
            <li><strong>No data retention:</strong>  Your privacy is our priority. We do not log, store, or have the ability to decrypt any of your messages.</li>
          </ul>
        </div>
      </section>
      <section className='advanced-section'>
        <div className='container'>
          <h3><img src={itTeam} alt="Perfect for IT teams, big or small" /><span>Perfect for IT teams, big or small</span></h3>
          <p><strong>A common scenario:</strong> You need to send credentials via email or Slack, but how can you ensure they’re not intercepted, or who has accessed them?</p>
          <p>With our service, you can create a one-time link for your credentials, ensuring they remain unseen until accessed by the intended recipient. You can also set up notifications to alert you when and by whom the credentials are viewed.</p>
          <p>Since the link is valid for only a single use, it guarantees that the credentials cannot be accessed again.</p>
          <p>We also support encrypted attachments for secure file sharing. Secret requests enable secure communication for exchanging sensitive information.</p>
          <p>Our platform offers full customization, allowing you to remove our branding, add your own, and control what users see when accessing credentials.</p>
          <p className='mb-0'>Need to integrate our service into your software or manage encryption externally? Our simple REST API makes it easy.</p>
        </div>
      </section>
      <section className='advanced-section'>
        <div className='container'>
          <h3><img src={trustedImg} alt="Developed with trusted, security-tested technologies" /><span>Developed with trusted, security-tested technologies</span></h3>
          <p>Given the sensitive nature of our service, particularly its operation within browsers, we prioritize security and privacy above all else. Our commitment to these principles is reflected in how we design and operate our service.</p>
          <p>We utilize only industry-standard, security-tested technologies and follow best practices in security. This includes AES-256-GCM encryption, ensuring the highest level of data protection.</p>
          <p><strong>Always Encrypted Communications</strong></p>
          <p>Our service operates entirely over HTTPS to guarantee that all communications are encrypted. This ensures the confidentiality and integrity of data transmitted between your browser and our servers.</p>
          <p><strong>Advanced Security Measures</strong></p>
          <p>We implement cutting-edge security technologies like Content Security Policy, Strict Transport Security, and Secure Cookies, alongside our unique encryption processes, to safeguard against known and emerging security threats.</p>
          <p><strong>Encryption at Rest and in Transit</strong></p>
          <p>All data stored in our databases is encrypted at rest, providing an additional layer of security. The encryption process also begins in the browser, ensuring data is encrypted before being transmitted.</p>
          <p><strong>Unique One-Time Link Generation Process</strong></p>
          <p>When generating a one-time link for a secret, two 18-character random strings are created in the browser as public and private key parts. The secret is then encrypted using these key parts, with the encrypted secret and private key sent to our backend. This ensures full encryption data is never entirely accessible—decrypting the secret requires both the link and database information.</p>
          <p><strong>No External JavaScript</strong></p>
          <p>To prevent the injection of malicious scripts, we avoid loading any external JavaScript on pages that handle sensitive data, maintaining control over the security environment.</p>
          <p><strong>No Logging of Sensitive Data</strong></p>
          <p>Our logging strategy minimizes data collection, ensuring no sensitive information is recorded. This includes the public encryption key part, which is stored in the link as a fragment identifier—this part isn’t transmitted to servers, making it inaccessible.</p>
          <p><strong>Secure One-Time Access</strong></p>
          <p className='mb-0'>Our backend ensures that the secret can only be accessed once. After the secret is retrieved, both the encrypted secret and private key are deleted from the database, ensuring the data is no longer accessible.</p>
        </div>
      </section>


      <section className="Trusted-section" >
        <div className='container'>
          <h3>Trusted secure password sharing since 2020</h3>
          <p>
            Since our launch in 2020, we've focused on developing this service, which has become the leading tool for securely transmitting confidential information across IT companies worldwide. Our commitment to ongoing improvement is rooted in one key principle: delivering simplicity without compromising on security.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
