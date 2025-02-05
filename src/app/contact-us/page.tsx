'use client';

import styled from 'styled-components';

import { TalentFinderForm } from '../components/ContactUs';

import {
  Header,
  HomeHeading,
  ReferralProgram,
  Footer,
  Offerings,
  KPISection,
  SlidingLogos,
  CustomerReviews,
} from '@/app/components';

const MainPage = styled.div``;

export default function ContactUs() {
  return (
    <MainPage>
      <Header />
      <TalentFinderForm />
      <Footer />
    </MainPage>
  );
}
