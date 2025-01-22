'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const logos = ['/cube.svg', '/public/icons/webflow.svg'];

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100px; // Adjust based on your logo height
  background-color: #f8f8f8;
`;

const SliderTrack = styled.div`
  display: flex;
  width: calc(${logos.length} * 200px); // Adjust for logo width
  animation: ${slide} 10s linear infinite;
`;

const Logo = styled.img`
  width: 150px; // Adjust based on your logo size
  margin: 0 25px;
`;

const SlidingLogos: React.FC = () => {
  return (
    <SliderContainer>
      <SliderTrack>
        {/* Repeat logos to ensure continuous sliding */}
        {[...logos, ...logos].map((logo, index) => (
          <Logo key={index} src={logo} alt={`Logo ${index}`} />
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default SlidingLogos;
