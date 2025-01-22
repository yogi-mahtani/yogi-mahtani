type Grid = {
  title: string;
  value: number;
  description: string;
  type: 'greater-than' | 'percentage' | null;
};

export const KPI_GRID_VALUES: Grid[] = [
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
  {
    title: 'Conversion rate on Jobs',
    value: 95,
    description: 'Many commited jobs',
    type: 'percentage',
  },
  {
    title: 'Industries Specialism',
    value: 5,
    description: 'Fintech, GreenTech, Adtech, Martech & Retail ',
    type: null,
  },
];
