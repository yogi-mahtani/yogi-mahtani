import Button from '@/app/ui-kit/Button';
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
  KPICard,
  CardValue,
} from './styled';

const KPISection = () => {
  return (
    <SectionContainer>
      <LeftSection>
        <SectionSubtitle>Success</SectionSubtitle>
        <SectionTitle>Our KPI's</SectionTitle>
        <SectionDescription>
          Identifying the right Talent is Easy! We focus on delivering a great
          customer experience.
        </SectionDescription>
        <ButtonContainer>
          <Button
            variant="outlined"
            color="var(--color-orange)"
            bordercolor="var(--color-orange)"
          >
            Contact Us
          </Button>
          <Button
            variant="filled"
            color="var(--color-brand-white)"
            backgroundcolor="var(--color-brand-black)"
          >
            Become Our Client
          </Button>
        </ButtonContainer>
      </LeftSection>
      <RightSection>
        <KPIGrid>
          {KPI_GRID_VALUES.map(({ title, value, description }) => {
            return (
              <KPICard key={title}>
                <h6>{title}</h6>
                <CardValue>{value}</CardValue>
                <p>{description}</p>
              </KPICard>
            );
          })}
        </KPIGrid>
      </RightSection>
    </SectionContainer>
  );
};

export default KPISection;
