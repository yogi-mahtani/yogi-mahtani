'use client';

import Image from 'next/image';

const logos = [
  '/images/company-logo-5.png',
  '/images/company-logo-8.png',
  '/images/company-logo-10.png',
  '/images/company-logo-11.png',
  '/images/company-logo-13.png',
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
      <Title>Companies our team has successfully placed with </Title>
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
