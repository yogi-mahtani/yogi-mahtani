import NavLink from '@/app/ui-kit/NavLink';

// Styles
import './index.css';

interface PageLink {
  title: string;
  url: string;
}
// constants
import { NAV_LINKS } from '@/app/constants';

const SupportPageLinks = () => {
  const pages: PageLink[] = [
    { title: 'About Us', url: NAV_LINKS.about },
    { title: 'Offering', url: NAV_LINKS.offerings },
    { title: 'Resources', url: NAV_LINKS.resources },
    { title: 'Contact Us', url: 'https://wa.me/+6581502247' },
  ];

  return pages.map(({ title, url }) => (
    <NavLink key={title} url={url}>
      {title}
    </NavLink>
  ));
};

export default SupportPageLinks;
