'use client';

import Image from 'next/image';

const logos = [
  '/icons/accenture.svg',
  '/icons/Airwallex.svg',
  '/icons/Animoca.svg',
  '/icons/dbs_bank.svg',
  '/icons/Epam.svg',
  '/icons/Gocity.svg',
  '/icons/moneyherogroup.svg',
  '/icons/Sapient.svg',
  '/icons/Visenze.svg',
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
