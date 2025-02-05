// constants
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
        {offerings.map(({ job, title, description }) => {
          return (
            <OfferingSection key={title}>
              <h6>{job}</h6>
              <h4>{title}</h4>
              <p>{description}</p>
              <p>Learn More</p>
            </OfferingSection>
          );
        })}
      </OfferingsSection>
    </SectionContainer>
  );
};

export default Offerings;
