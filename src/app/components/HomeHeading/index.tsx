'use client';

import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

// styles
import './index.css';

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
      strings: ['Product Manager', 'Software Developer'],
      ...animationConfig,
    });
    const sectorAni = new Typed(sectorEle.current, {
      strings: ['Product Manager', 'Finance'],
      ...animationConfig,
    });
    const marketAni = new Typed(marketEle.current, {
      strings: ['APAC', 'EU', 'North America', 'Middle East'],
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
        Looking for{' '}
        <span className="colored-heading">
          {' '}
          <span ref={profestionEle} />
        </span>
      </div>
      <div className="intro-heading">
        with <span className="colored-heading">Fintech</span> Experience in{' '}
        <span className="colored-heading" ref={sectorEle} />,
      </div>
      <div className="intro-heading">
        Covering the <span className="colored-heading" ref={marketEle}></span>{' '}
        Market
      </div>
      <div>Recruit with Product and Technology Functional Experts</div>
    </div>
  );
};

export default HomeHeading;
