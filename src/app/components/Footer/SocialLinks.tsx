import NavLink from '@/app/ui-kit/NavLink';
import SvgImage from '../SvgImage';

import { NAV_LINKS } from '@/app/constants';

// Styles
import './index.css';

const SocialLinks = () => {
  const links = [
    { url: 'https://facebook.com', path: '/icons/facebook.svg' },
    { url: 'https://instagram.com', path: '/icons/instagram.svg' },
    { url: NAV_LINKS.about, path: '/icons/linkedIn.svg' },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink key={link.path} url={link.url}>
          <SvgImage path={link.path} />
        </NavLink>
      ))}
    </>
  );
};

export default SocialLinks;
