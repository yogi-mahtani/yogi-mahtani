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
} from './styled';

const KPISection = () => {
  return (
    <SectionContainer>
      <LeftSection>
        <SectionSubtitle>Success</SectionSubtitle>
        <SectionTitle>Our KPI's</SectionTitle>
        <SectionDescription>
          <p>Identifying the right Talent is Easy!</p>
          <p>We focus on delivering a great customer experience.</p>
        </SectionDescription>
        <ButtonContainer>
          <Button
            variant="filled"
            color="var(--color-brand-white)"
            backgroundcolor="var(--color-brand-black)"
          >
            Become a client
          </Button>
        </ButtonContainer>
      </LeftSection>
      <RightSection>
        <KPIGrid>
          {KPI_GRID_VALUES.map(({ title, value, description, type }) => (
            <KPICardSection
              key={title}
              title={title}
              value={value}
              description={description}
              type={type}
            />
          ))}
        </KPIGrid>
      </RightSection>
    </SectionContainer>
  );
};

export default KPISection;
