'use client';

// components
import Button from '@/app/ui-kit/Button';

import {
  StyledBox,
  HeadingWrapper,
  HighlightedText,
  NormalText,
  SubText,
  ButtonWrapper,
} from './styled';

const ReferralProgram = () => {
  return (
    <StyledBox>
      <HeadingWrapper>
        <HighlightedText>Save over 30%</HighlightedText>{' '}
        <NormalText>
          on your next hire Check out our referral Program
        </NormalText>
      </HeadingWrapper>
      <SubText>Contact us to find out more about our referral program</SubText>
      <ButtonWrapper>
        <Button
          size="large"
          variant="filled"
          color="var(--color-brand-white)"
          backgroundcolor="var(--color-brand-black)"
        >
          Enquire Now
        </Button>
      </ButtonWrapper>
    </StyledBox>
  );
};

export default ReferralProgram;
