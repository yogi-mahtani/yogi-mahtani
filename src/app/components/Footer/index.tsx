'use client';

// Components
import { Divider } from './Divider';

// Assets
import Logo from '../Logo';

// Styles
import './index.css';

const Footer = () => {
  const supportPageLinks = () => {
    let pages = ['About Us', 'Services', 'Contact Us', 'FAQ', 'Blog'];
    return pages.map((page) => (
      <div key={page} className="page-link">
        {page}
      </div>
    ));
  };
  const socialLinks = () => {
    let links = ['/fb.png', '/Insta.png', '/Twitter.png', '/Youtube.png'];
    return links.map((link) => (
      <img key={link} src={link} className="socail-link" />
    ));
  };
  const contactLinks = () => {
    let contactLinks = [
      { title: 'Email', value: 'Leadconsultant@fynder.com', img: '/Email.png' },
      { title: 'Hong Kong', value: '+852 55127188', img: '/location.png' },
      { title: 'singapore', value: '+65 8333 4000', img: '/location.png' },
    ];
    return contactLinks.map((link) => (
      <div key={link.title} className="footer-contact-link-item">
        <img className="footer-contact-link-img" src={link.img} />
        <h4>{link.title}</h4>
        <p>{link.value}</p>
      </div>
    ));
  };

  const privacyLinks = () => {
    let privacyLinks = [
      'Privacy Policy',
      'Terms and Conditions',
      'Cookie Policy',
    ];
    return privacyLinks.map((privacyLink) => (
      <div key={privacyLink}>{privacyLink}</div>
    ));
  };

  return (
    <div className="footer-container">
      <div className="footer-contact-page-container">
        <Logo></Logo>
        <div className="footer-contact-page-links-container">
          {supportPageLinks()}
        </div>
        <div className="footer-socialMedia">{socialLinks()}</div>
      </div>
      <div className="footer-privacy-contact-links-container">
        <Divider></Divider>

        <div className="footer-privacy-links-container">
          <div>&#xA9; 2024 Fynder Talent.All rights reserved </div>
          {privacyLinks()}
        </div>

        <div className="footer-conatact-link-container">{contactLinks()}</div>
      </div>
    </div>
  );
};

export default Footer;
