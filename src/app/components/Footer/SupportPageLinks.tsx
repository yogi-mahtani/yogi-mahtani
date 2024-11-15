import Link from 'next/link';

// Styles
import './index.css';

interface PageLink {
  title: string;
  href: string;
}
// constants
import { NAV_LINKS } from '@/app/constants';

const SupportPageLinks = () => {
  const pages: PageLink[] = [
    { title: 'About Us', href: NAV_LINKS.about },
    { title: 'Offering', href: NAV_LINKS.offerings },
    { title: 'Resources', href: NAV_LINKS.resources },
    { title: 'Contact Us', href: '/contact' },
  ];

  return pages.map((page) => (
    <div key={page.title} className="page-link">
      <Link href={page.href}>{page.title}</Link>
    </div>
  ));
};

export default SupportPageLinks;
