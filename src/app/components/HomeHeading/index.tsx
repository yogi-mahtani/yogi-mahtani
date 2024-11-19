'use client';

import { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';

// styles
import './index.css';
import Button from '@/app/ui-kit/Button';
import TypingAnimation from '../Animations/TypingAnimation';

const HomeHeading = () => {
    let ids = [1,2,3];
    const [completed,setCompleted] = useState(0); 
    const [toggle,setToggle] = useState(false)
  let productsStr = [
    'Product Leader',
    'Product Designer',
    'VP Engineering',
    'Chief Technology Officer',
    'Chief Product Officer',
    'Product Manager',
    'Product Manager',
    'DevOps',
    'DevOps',
  ];
  let sectorStrs = [
    'Adtech Industry in DSPs',
    'AI Space in the Retail Tech industry',
    'Virtual Banks',
    'Creator Economy',
    'Developer Experience Products',
    ' SaaS Experience in Fintech',
    'Marketplaces in Fintech',
    'Blockchain',
    'B2B Payments',
  ];
  let regions = [
    'APAC',
    'SEA',
    'Vietnam',
    'EMEA',
    'United Kingdom',
    'Asia',
    'Asia',
    'EMEA',
    'Asia',
  ];
  useEffect(() => {
      if(completed === 3) {
        setToggle(!toggle);
        setCompleted(0);
      }
  }, [completed]);

  const isCompleted = (id)=>{
    setCompleted((count)=> count+1);
  }

  return (
    <div className="intro">
      <div className="intro-heading">Looking for your next </div>
      <div className="intro-heading">
      <TypingAnimation toggle = {toggle} isCompleted = {isCompleted} id= {1}  strings = {productsStr}></TypingAnimation>
      </div>
      <div className="intro-heading">with experience in </div>
      <div className="intro-heading">
      <TypingAnimation toggle = {toggle} id= {2}  isCompleted = {isCompleted} strings = {sectorStrs}></TypingAnimation>
      </div>
      <div className="intro-heading">covering</div>
      <div className="intro-heading">
      <TypingAnimation toggle = {toggle} id = {3}  isCompleted = {isCompleted} strings = {regions}></TypingAnimation>
      </div>
      <p className='minor-heading'>Helping Product & Technology Businesses find and <br/> access Talent in emerging markets </p>
      <div className="button-container">
        <Button variant="filled">Enquire now</Button>
      </div>
    </div>
  );
};

export default HomeHeading;
