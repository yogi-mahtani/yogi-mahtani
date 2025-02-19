// constants | components
import Button from '@/app/ui-kit/Button';
import { offerings } from './constants';

// styles
import {
  OfferingSection,
  SectionContainer,
  SectionHeaderContainer,
  Title,
  Description,
  OfferingsSection,
} from './styles';

const Offerings = () => {
  return (
    <SectionContainer>
      <SectionHeaderContainer>
        <Title>Tailored to fit your needs</Title>
        <h4>Our Offering</h4>
        <Description>
          Discover the Power of Fynder Talent's Expertise
        </Description>
      </SectionHeaderContainer>
      <OfferingsSection>
        {offerings.map(({ job, title, description, bgImage, btnText }) => {
          return (
            <OfferingSection key={title} bgImage={bgImage}>
              <h6>{job}</h6>
              <h4>{title}</h4>
              <p>{description}</p>
              <Button
                size="large"
                variant="outlined"
                bordercolor="transparent"
                color="var(--color-brand-white)"
                backgroundcolor="var(--color-brand-black)"
              >
                {btnText}
              </Button>
            </OfferingSection>
          );
        })}
      </OfferingsSection>
    </SectionContainer>
  );
};

export default Offerings;
