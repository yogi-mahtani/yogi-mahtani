'use client';

import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const logos = [
  '/icons/webflow.svg',
  '/icons/relume.svg',
  '/icons/webflow.svg',
  '/icons/relume.svg',
  '/icons/webflow.svg',
  '/icons/relume.svg',
  '/icons/webflow.svg',
  '/icons/relume.svg',
];

// Styled Components
import {
  SlidingSectionWrapper,
  SliderContainer,
  LogosWrapper,
  Logo,
  Title,
} from './styled';

const LogoSlider = () => {
  return (
    <SlidingSectionWrapper>
      <Title>Our team has worked with the following brands collectively</Title>
      <SliderContainer>
        <LogosWrapper>
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <Logo key={index}>
              <Image
                src={logo}
                alt={`Logo ${index}`}
                width={150}
                height={50}
                unoptimized
              />
            </Logo>
          ))}
        </LogosWrapper>
      </SliderContainer>
    </SlidingSectionWrapper>
  );
};

export default LogoSlider;
