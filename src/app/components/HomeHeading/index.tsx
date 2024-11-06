'use client';

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

// styles
import './index.css';
import Button from '@/app/ui-kit/Button';

const HomeHeading = () => {
  const profestionEle = useRef(null);
  const sectorEle = useRef(null);
  const marketEle = useRef(null);
  const animationConfig = {
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    backDelay: 1000,
  };

  useEffect(() => {
    const productAni = new Typed(profestionEle.current, {
      strings: ['Product Leader','Product Designer','VP Engineering','Chief Technology Officer','Chief Product Officer','Product Manager', 'Product Manager','DevOps ','DevOps'],
      ...animationConfig,
    });
    const sectorAni = new Typed(sectorEle.current, {
      strings: ['Adtech Industry in DSPs', 'AI Space in the Retail Tech industry', 'Virtual Banks','Creator Economy','Developer Experience Products',' SaaS Experience in Fintech','Marketplaces in Fintech','Blockchain','B2B Payments'],
      ...animationConfig,
    });
    const marketAni = new Typed(marketEle.current, {
      strings: ['APAC','SEA' ,' Vietnam','EMEA','United Kingdom','Asia','Asia','EMEA','Asia'],
      ...animationConfig,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      productAni.destroy();
      sectorAni.destroy();
      marketAni.destroy();
    };
  }, []);

  return (
    <div className="intro">
      <div className="intro-heading">
        Looking for your next{' '}</div>
        <div className="intro-heading">
        <span className="colored-heading">
          {' '}
          <span ref={profestionEle} />
        </span>
      </div>
      <div className="intro-heading">
        with experience in{' '}
        </div>
        <div className='intro-heading'>
        <span className="colored-heading" ref={sectorEle} />,
      </div>
      <div className="intro-heading">
        Covering the 
      </div>
      <div className='intro-heading'>
      <span className="colored-heading" ref={marketEle}></span>{' '}
      </div>
      <div className='minor-heading'>Helping buisness recruit across with Product & Technology Companies and </div>
      <div className='minor-heading'>across talents in emerging markets . Get in touch</div>
      <div className='button-container'><Button
      variant='filled'
      >Enquire now</Button></div>
    </div>
  );
};

export default HomeHeading;
