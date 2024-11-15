import Link from 'next/link';
import SvgImage from '../SvgImage';

// Styles
import './index.css';

const SocialLinks = () => {
  const links = [
    { href: 'https://facebook.com', path: '/icons/facebook.svg' },
    { href: 'https://instagram.com', path: '/icons/instagram.svg' },
  ];

  return links.map((link) => (
    <Link key={link.path} href={link.href} passHref>
      <SvgImage path={link.path} />
    </Link>
  ));
};

export default SocialLinks;
