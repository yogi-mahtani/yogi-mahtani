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
  font-size: 1.175rem;
  font-weight: 400;
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
  width: calc(200% + 10px);
  animation: ${slide} 8s linear infinite;
`;

export const Logo = styled.div`
  flex-shrink: 0;
  margin: 0 16px;
`;
