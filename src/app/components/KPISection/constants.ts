export type Grid = {
  title: string;
  value?: number | undefined;
  description: string;
  type?: 'greater-than' | 'percentage' | null | string;
};

export const KPI_GRID_VALUES: Grid[] = [
  {
    title: 'Our Value',
    description:
      'Integrity is the core of everything we do and our expertise as a functional and industry consultant helps not just reduce the time in hiring but also being able to  identify gaps and discrepencies to manage your expectations whilst we execute to identifying someone with culture and business fit.',
  },
  {
    title: 'Markets Covered',
    value: 10,
    description:
      'Our core focus is in the APAC region with coverage extends globally for Product related role. ',
    type: 'greater-than',
  },
  {
    title: 'Who we are',
    description:
      'We are Headquartered in Hong Kong, A team of functional and Industry experts.  Founded by a Product  specialist with over 15+ years in Product organisations with history in building Marketplaces, eCommerce, SaaS, AI,  IOT, and Gaming Products across APAC.',
  },

  {
    title: 'Industries Specialism',
    value: 8,
    description:
      'We are agnostic across industry but have covered AI, Web3, Fintech, Creator & influencer platforms, Adtech, Martech & Retail ',
    type: null,
  },
  {
    title: 'Conversion rate on Jobs',
    value: 95,
    description:
      'We are able to grasp the technicalities or the role, expectations of the business and consult at time on the evolving landscape. ',
    type: 'percentage',
  },
  {
    title: 'Businesses Collaborated with',
    value: 20,
    description:
      'Working with SaaS, Marketplace, Consulting and other Tech businesses agnostic across Industries.',
    type: 'greater-than',
  },
];
