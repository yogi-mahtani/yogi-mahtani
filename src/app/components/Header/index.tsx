'use client';

import { useState } from 'react';
import Link from 'next/link';

// components | constants
import { HamburgerMenu } from '@/app/components';
import Button from '@/app/ui-kit/Button';
import SvgImage from '../SvgImage';
import { NAV_LINKS, BUTTON_LINKS } from '@/app/constants';

// styles
import './index.css';
import NavLink from '@/app/ui-kit/NavLink';
interface Link {
  name: string;
  url: string;
}

type Links = Link[];

const Header: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleMenuItemClick = (url: string) => {
    try {
      const validatedUrl = new URL(url);
      window.open(validatedUrl.toString(), '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Invalid URL:', error);
    }
  };

  const menus = (): JSX.Element => {
    const { about, offerings, resources } = NAV_LINKS;

    const links: Links = [
      { name: 'About', url: about },
      { name: 'Offering', url: offerings },
      { name: 'Resources', url: resources },
    ];

    return (
      <>
        {links.map(({ name, url }) => (
          <NavLink key={name} url={url}>
            {name}
          </NavLink>
        ))}
      </>
    );
  };

  const hamburgerClicked = (): void => {
    setIsHamburgerOpen((prev) => !prev);
  };

  return (
    <div className="flex nav-bar">
      <div className="hamburgerContainer">
        <Link href={'htpps://fyndertalent.com'}>
          <SvgImage path={'/icons/brand-logo.svg'} width={182} height={35} />
        </Link>
        <HamburgerMenu
          handleClick={hamburgerClicked}
          active={isHamburgerOpen}
        />
      </div>
      <div className={`right-section ${isHamburgerOpen ? 'open' : ' '}`}>
        {menus()}
        <Button
          variant="outlined"
          color="var(--color-orange)"
          bordercolor="var(--color-orange)"
          onClick={() => handleMenuItemClick(BUTTON_LINKS.jobs)}
        >
          Jobs
        </Button>
        <Button
          variant="filled"
          color="var(--color-brand-white)"
          backgroundcolor="var(--color-brand-black)"
        >
          Find Talent
        </Button>
      </div>
    </div>
  );
};

export default Header;
