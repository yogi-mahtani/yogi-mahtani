'use client';

import { useEffect, useState } from 'react';
import { css } from 'styled-components';

// components
import Button from '@/app/ui-kit/Button';
import TypingAnimation from '../Animations/TypingAnimation';

// styles
import './index.css';

const HomeHeading = () => {
  const [completed, setCompleted] = useState(0);
  const [toggle, setToggle] = useState(false);

  const productsStr = [
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
  const sectorStrs = [
    'Adtech Industry in DSPs',
    'AI Space in the Retail Tech industry',
    'Virtual Banks',
    'Creator Economy',
    'Developer Experience Products',
    'SaaS Experience in Fintech',
    'Marketplaces in Fintech',
    'Blockchain',
    'B2B Payments',
  ];
  const regions = [
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
    if (completed === 3) {
      setToggle(!toggle);
      setCompleted(0);
    }
  }, [completed]);

  const isCompleted = () => {
    setCompleted((count) => count + 1);
  };

  return (
    <div className="home-wrapper">
      <div className="intro">
        <div className="intro-heading">Looking for your next </div>
        <TypingAnimation
          toggle={toggle}
          isCompleted={isCompleted}
          id={1}
          strings={productsStr}
        />
        <div className="intro-heading">with experience in </div>
        <TypingAnimation
          toggle={toggle}
          id={2}
          isCompleted={isCompleted}
          strings={sectorStrs}
        />
        <div className="intro-heading">covering</div>
        <TypingAnimation
          toggle={toggle}
          id={3}
          isCompleted={isCompleted}
          strings={regions}
        />
        <p className="minor-heading">
          Helping Product & Technology Businesses find and <br /> access Talent
          in emerging markets{' '}
        </p>
        <div className="button-container">
          <Button
            size="large"
            variant="filled"
            color="var(--color-brand-white)"
            backgroundcolor="var(--color-brand-black)"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeading;
