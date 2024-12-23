import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 64px;
  border-radius: 30px;
  border: 1px solid var(--color-orange);
`;

export const HeadingWrapper = styled.h2`
  font-style: normal;
  font-weight: 700;
  text-align: center;
  max-width: 768px;
  width: 100%;
`;

export const HighlightedText = styled.span`
  background: var(--text-orange-and-pink-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

export const NormalText = styled.span`
  color: var(--grey-scale-800);
`;

export const SubText = styled.p`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
`;
