import { Header, HomeHeading, ReferralProgram, Footer } from '@/app/components';

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeading />
      <div className="common-sytled-wrapper">
        <ReferralProgram />
      </div>
      <Footer />
    </>
  );
}
