'use client';

import React, { useState } from 'react';
import { Logo } from '../Logo';
import { Links } from '../../Utils/Links';
import Hamburger from '../Hamburger';

import './index.css';

const Header: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleNavLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  const menus = () => {
    let links = [
      { name: 'About', url: Links.NAV_LINKS.AboutUS },
      { name: 'Offering', url: Links.NAV_LINKS.Offerings },
      { name: 'Resources', url: Links.NAV_LINKS.Resources },
    ];
    return links.map((link) => (
      <div
        key={link.name}
        className="nav-link"
        onClick={() => handleNavLinkClick(link.url)}
      >
        {link.name}{' '}
      </div>
    ));
  };

  const hamburgerClicked = (): void => {
    setIsHamburgerOpen((prev) => !prev);
  };

  return (
    <div className="flex nav-bar">
      <div className="hamburgerContainer">
        <Logo></Logo>
        <Hamburger
          onClick={hamburgerClicked}
          active={`hamburger ${isHamburgerOpen ? 'active' : ''}`}
        />
      </div>
      <div className={`nav-links ${isHamburgerOpen ? 'open' : ' '}`}>
        {menus()}
      </div>
    </div>
  );
};

export default Header;
