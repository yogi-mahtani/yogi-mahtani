import React from 'react';

import './index.css';

interface HamburgerProps {
  active: boolean;
  handleClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerProps> = ({ active, handleClick }) => {
  const getClassNames = () => {
    return `hamburger ${active ? 'active' : ''}`.trim();
  };

  return (
    <div className={getClassNames()} onClick={handleClick}>
      <div className="ham-itm1"></div>
      <div className="ham-itm2"></div>
      <div className="ham-itm3"></div>
    </div>
  );
};

export default HamburgerMenu;
