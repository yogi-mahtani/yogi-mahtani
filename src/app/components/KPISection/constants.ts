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
    title: 'Conversion rate on Jobs',
    value: 95,
    description: 'Many commited jobs',
    type: 'percentage',
  },
  {
    title: 'Who is Fynder',
    description:
      'We are Headquartered in Hong Kong,  Founded by Yogi Mahtani, a Product specialist with over 15+ years in Product organisations built Marketplaces, eCommerce, SaaS, AI,  IOT, and Gaming Products. ',
  },

  {
    title: 'Industries Specialism',
    value: 5,
    description: 'Fintech, GreenTech, Adtech, Martech & Retail ',
    type: null,
  },
  {
    title: 'Markets Covered',
    value: 15,
    description:
      'Covering both Emerging  and developed markets across Asia and AZN',
    type: 'greater-than',
  },
  {
    title: 'Businesses Collaborated with',
    value: 20,
    description:
      'Working with SaaS, Marketplace, Consulting and Tech businesse across Industries.',
    type: 'greater-than',
  },
];
