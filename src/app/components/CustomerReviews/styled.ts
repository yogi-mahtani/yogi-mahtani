import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';

interface DotProps {
  $active: boolean;
}

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ReviewContainer = styled.div<{ $isAnimating: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: ${({ $isAnimating }) => ($isAnimating ? '0.5' : '1')};
  animation: ${({ $isAnimating }) => ($isAnimating ? slideIn : 'none')} 0.5s
    ease-in-out;
  transition: opacity 0.3s ease;
`;

export const ReviewSection = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 84px 64px;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 40px;
  }
`;

export const Stars = styled.div`
  font-size: 20px;
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

export const ReviewText = styled.h5`
  margin: 32px 0;
  color: #333;
  font-size: 24px;
  font-weight: 700;
  max-width: 768px;
  width: 100%;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  animation-delay: 1s;
`;

export const Reviewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  animation-delay: 0.4s;
`;

export const CompanyLogo = styled(Image)`
  width: 132px;
  height: 132px;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;

const commonArrowStyles = css`
  padding: 6px;
  border-radius: 50px;
  border: 1px solid var(--grey-scale-800);
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: rgba(255, 48, 48, 1);
    color: white;
  }
`;

export const LeftArrow = styled(NavButton)`
  left: 10px;
  ${commonArrowStyles};
`;

export const RightArrow = styled(NavButton)`
  right: 10px;
  ${commonArrowStyles};
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Dot = styled.button<DotProps>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ $active }) =>
    $active ? 'var(--color-orange)' : '#ccc'};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
`;

export const ReivewerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  border-right: 1px solid #000;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1s;

  h6 {
    font-weight: 600;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    padding: 0 40px;
  }
`;

export const ReviewerInfo = styled.div``;
