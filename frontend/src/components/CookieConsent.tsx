import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [show, setShow] = useState<boolean>(() => {
    return !cookies['cookieConsent'];
  });

  const handleAccept = () => {
    setCookie('cookieConsent', true, {
      path: '/',
      maxAge: 31536000, // 1 year
      sameSite: 'strict',
      secure: true,
    });
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__content">
        <p>We use cookies to improve your experience on our website. By continuing to use this site, you consent to the use of cookies.</p>
        <button className="cookie-consent__accept-button" onClick={handleAccept}>Accept</button>
        <Link className="cookie-consent__more-info" to="/privacy-policy">More info</Link>
      </div>
    </div>
  );
};

export default CookieConsent;
