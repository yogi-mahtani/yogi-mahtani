import Image from 'next/image';

// components
import Button from '@/app/ui-kit/Button';
import KPICardSection from './KPICardSection';

// constants
import { KPI_GRID_VALUES } from './constants';
import {
  SectionContainer,
  LeftSection,
  RightSection,
  SectionTitle,
  SectionSubtitle,
  SectionDescription,
  ButtonContainer,
  KPIGrid,
  ImageWrapper,
} from './styled';

const KPISection = () => {
  return (
    <SectionContainer>
      <LeftSection>
        <SectionSubtitle>About Fynder</SectionSubtitle>
        <SectionTitle>Our Focus</SectionTitle>
        <SectionDescription>
          <p>
            Fynder is a specialist recruitment firm for Product and Technology
            companies globally supporting startups, corporates, and businesses
            undergoing digital transformation.{' '}
          </p>
          <p>
            Whether you're scaling a high-growth company or modernizing an
            established business, looking to expand into new markets, we connect
            you with talent that will help you achieve your goals.
          </p>
        </SectionDescription>
        <ButtonContainer>
          <Button
            variant="filled"
            size="large"
            color="var(--color-brand-white)"
            backgroundcolor="var(--color-brand-black)"
          >
            Get in Touch
          </Button>
        </ButtonContainer>
        <ImageWrapper></ImageWrapper>
        {/* <Image
          src={'/images/lead_consultant.png'}
          alt={`Lead Consultant`}
          width={3050}
          height={1050}
          unoptimized
        /> */}
      </LeftSection>
      <RightSection>
        <KPIGrid>
          {KPI_GRID_VALUES.map(({ title, value, description, type }) => {
            return (
              <KPICardSection
                key={title}
                title={title}
                value={value}
                description={description}
                type={type}
              />
            );
          })}
        </KPIGrid>
      </RightSection>
    </SectionContainer>
  );
};

export default KPISection;
