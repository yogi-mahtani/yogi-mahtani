'use client';

import { useState } from 'react';

// components | constants
import { Logo, HamburgerMenu } from '@/app/components';
import Button from '@/app/ui-kit/Button';
import { NAV_LINKS, BUTTON_LINKS } from '@/app/constants';

// styles
import './index.css';
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

    const links: Link[] = [
      { name: 'About', url: about },
      { name: 'Offering', url: offerings },
      { name: 'Resources', url: resources },
    ];

    return (
      <>
        {links.map((link) => (
          <div
            key={link.url}
            className="nav-link"
            onClick={() => handleMenuItemClick(link.url)}
          >
            {link.name}
          </div>
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
        <Logo />
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
        <Button variant="filled">Find Talent</Button>
      </div>
    </div>
  );
};

export default Header;
