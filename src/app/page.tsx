import {
  Header,
  HomeHeading,
  ReferralProgram,
  Footer,
  KPISection,
  SlidingLogos,
} from '@/app/components';

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeading />
      <div className="common-styled-wrapper">
        <KPISection />
        <ReferralProgram />
      </div>
      <Footer />
    </>
  );
}
