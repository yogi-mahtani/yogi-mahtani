'use client';
import React, { use, useEffect, useState } from 'react';
import { Logo } from '../Logo';
import { Links } from '../../Utils/Links';

import './index.css';
import { Hamburger } from '../hamburger';

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

  const hamburgerClicked = () => {
    let hamburger = document.querySelector('.hamburger');
    if (!isHamburgerOpen) {
      hamburger?.classList.add('active');
    } else {
      hamburger?.classList.remove('active');
    }
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div className="flex nav-bar">
      <div className="hamburgerContainer">
        <Logo></Logo>
        <Hamburger onClick={hamburgerClicked} />
      </div>
      <div className={`nav-links ${isHamburgerOpen ? 'open' : ' '}`}>
        {menus()}
      </div>
    </div>
  );
};

export default Header;
