'use client';
import styled from 'styled-components';
import {
  Header,
  HomeHeading,
  ReferralProgram,
  Footer,
  Offerings,
  KPISection,
  SlidingLogos,
} from '@/app/components';

const MainPage = styled.div``;

export default function Home() {
  return (
    <MainPage>
      <Header />
      <HomeHeading />
      <div className="common-styled-wrapper">
        <SlidingLogos />
        <Offerings />
        <KPISection />
        <ReferralProgram />
      </div>
      <Footer />
    </MainPage>
  );
}
