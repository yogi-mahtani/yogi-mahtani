import styled, { keyframes } from 'styled-components';

// Keyframes for infinite sliding animation
const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const SlidingSectionWrapper = styled.div`
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h6`
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  padding: 24px 0;
  display: flex;
  width: 100%;
`;

export const LogosWrapper = styled.div`
  display: flex;
  gap: 120px;
  width: calc(200% + 10px);
  animation: ${slide} 20s linear infinite;

  @media (max-width: 600px) {
    gap: 30px;
  }
`;

export const Logo = styled.div`
  flex-shrink: 0;
  margin: 0 16px;
`;
