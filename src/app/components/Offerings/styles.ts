'use client';

import styled from 'styled-components';

export const SectionContainer = styled.div`
  border-radius: 30px;
  background: var(--text-orange-and-pink-gradient);
  padding: 64px;
  margin-bottom: 64px;
`;

export const OfferingSection = styled.div`
  display: flex;
  min-height: 742px;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.75);
  color: var(--grey-scale-0);
  padding: 24px;
  h6 {
    margin-bottom: 8px;
  }
  h4 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 24px;
  }
  button {
    margin-left: -20px;
  }
`;

export const SectionHeaderContainer = styled.div`
  display: none;
  color: var(--grey-scale-0);
  margin-bottom: 54px;
  text-align: center;

  h4 {
    font-weight: 700;
    margin-bottom: 20px;
  }

  @media (max-width: 701px) {
    display: block;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const OfferingsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
  height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;
