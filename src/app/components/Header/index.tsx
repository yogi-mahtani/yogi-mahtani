import React from 'react';
import { Logo } from '../Logo';


import './index.css'

const Header: React.FC = () => {

  const menus = ()=>{
    let links = ['About','Offering','Resources']
    return links.map((link)=>    <div className='nav-link'>{link} </div>
  )
  }


  return <div className='flex nav-bar'>

    <Logo></Logo>
    <div className='nav-links'>
    {menus()}
    </div>
    
    </div>;
};

export default Header;
