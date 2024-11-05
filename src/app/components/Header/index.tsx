'use client';

import { useState } from 'react';

// components | constants
import { Logo, HamburgerMenu } from '@/app/components';
import { NAV_LINKS } from '@/app/constants';

// styles
import './index.css';
interface Link {
  name: string;
  url: string;
}

type Links = Link[];

const Header: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleNavLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  const menus = () => {
    const { about, offerings, resources } = NAV_LINKS;
    let links: Links = [
      { name: 'About', url: about },
      { name: 'Offering', url: offerings },
      { name: 'Resources', url: resources },
    ];
    return links.map((link) => (
      <div
        key={link.url}
        className="nav-link"
        onClick={() => handleNavLinkClick(link.url)}
      >
        {link.name}
      </div>
    ));
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
      <div className={`nav-links ${isHamburgerOpen ? 'open' : ' '}`}>
        {menus()}
      </div>
    </div>
  );
};

export default Header;
