import NavLink from '@/app/ui-kit/NavLink';
import SvgImage from '../SvgImage';

// Styles
import './index.css';

interface ContactLink {
  title: string;
  value: string;
  img: string;
}

const ContactLinks = () => {
  const contactLinks: ContactLink[] = [
    {
      title: 'Email',
      value: 'consultant@fyndertalent.com',
      img: '/icons/email.svg',
    },
    {
      title: 'Hong Kong',
      value: '+852 55127188',
      img: '/icons/location.svg',
    },
    {
      title: 'Singapore',
      value: '+65 8333 4000',
      img: '/icons/location.svg',
    },
  ];

  return contactLinks.map((link) => (
    <div key={link.title} className="footer-contact-link-item">
      <SvgImage path={link.img} width={48} height={48} />
      <h6>{link.title}</h6>
      {link.title === 'Email' ? (
        <NavLink underline={true} url={`mailto:${link.value}`}>
          {link.value}
        </NavLink>
      ) : (
        <NavLink underline={true} url={`tel:${link.value.replace(/\s+/g, '')}`}>
          {link.value}
        </NavLink>
      )}
    </div>
  ));
};

export default ContactLinks;
