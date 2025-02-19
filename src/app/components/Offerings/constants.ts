type Offerings = {
  job: string;
  title: string;
  description: string;
  bgImage: string;
  btnText: string;
  path: string;
};

const offerings: Offerings[] = [
  {
    job: 'Bespoke Tailored Solutions',
    title: 'Other Talent Solutions',
    description: 'Our offering contains solutions',
    bgImage: '/images/talentsolutions1.png',
    btnText: 'Learn More',
    path: '/talent-solutions',
  },
  {
    job: 'Senior Executive Contract',
    title: 'Go Fractional',
    description:
      'Looking for subject matter experts that’s available as a placeholder in your business',
    bgImage: '/images/talentsolutions2.png',
    btnText: 'Get Talent Pool',
    path: '/fractional',
  },
  {
    job: 'Senior Executive Permenant',
    title: 'Executive Search',
    description:
      'Let us handle your talent acquisition so you can focus on your core business.',
    bgImage: '/images/talentsolutions3.png',
    btnText: 'Get in Touch',
    path: '/fractional',
  },
];

export { offerings };
