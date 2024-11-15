'use client';
import Link from 'next/link';

// Components
import { Divider } from './Divider';
import SupportPageLinks from './SupportPageLinks';
import SocialLinks from './SocialLinks';
import ContactLinks from './ContactLinks';
import PrivacyLinks from './PrivacyLinks';
import SvgImage from '../SvgImage';

// Styles
import './index.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact-page-container">
        <div className="logo-container">
          <Link href={'htpps://fyndertalent.com'}>
            <SvgImage path={'/icons/brand-logo.svg'} width={182} height={35} />
          </Link>
        </div>
        <div className="footer-contact-page-links-container">
          <SupportPageLinks />
        </div>
        <div className="footer-socialMedia">
          <SocialLinks />
        </div>
      </div>
      <div className="footer-privacy-contact-links-container">
        <Divider></Divider>
        <div className="footer-privacy-links-container">
          <p>© 2024 Fynder Talent.All rights reserved</p>
          <PrivacyLinks />
        </div>
        <div className="footer-contact-link-container">
          <ContactLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
