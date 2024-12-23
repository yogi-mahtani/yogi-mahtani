'use client';
import styled from 'styled-components';

export const SectionContainer = styled.div`
  border-radius: 30px;
  background: #f5f5f5;
  padding: 64px;
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

export const LeftSection = styled.div``;

export const RightSection = styled.div``;

export const SectionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const SectionSubtitle = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 16px;
`;

export const SectionDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const KPICard = styled.div`
  aspect-ratio: 1 / 1;
  max-width: 336px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 48px;
  padding: 32px;
  border: 1px solid var(--grey-scale-800);

  h6 {
    align-self: flex-start;
    text-align: left;
    font-weight: 700;
  }

  p {
    text-align: right;
    font-size: 1rem;
    font-weight: 400;
    border-top: 1px solid var(--grey-scale-800);
    padding-top: 16px;
    width: 100%;
  }
`;

export const CardValue = styled.div`
  font-size: 80px;
  background: linear-gradient(102deg, #ff3030 16.02%, #ff00a0 109.63%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
