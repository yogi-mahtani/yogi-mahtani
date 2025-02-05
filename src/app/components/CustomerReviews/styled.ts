import Image from 'next/image';
import styled, { css } from 'styled-components';

interface DotProps {
  active: boolean;
}

export const ReviewSection = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  padding: 84px 64px;
`;

export const Stars = styled.div`
  font-size: 20px;
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const ReviewText = styled.h5`
  margin: 32px 0;
  color: #333;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  max-width: 768px;
  width: 100%;
  text-align: center;
`;

export const Reviewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
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
  background-color: ${({ active }) =>
    active ? 'var(--color-orange)' : '#ccc'};
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const ReivewerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  border-right: 1px solid #000;
  h6 {
    font-weight: 600;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;
export const ReviewerInfo = styled.div``;
