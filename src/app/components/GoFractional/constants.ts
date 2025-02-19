import { NAV_LINKS } from '@/app/constants';

export type SocialIcon = {
  url: string;
  path: string;
};
export interface JobType {
  title: string;
  company: string;
  tags: string[];
  description: string;
  socialIcons: SocialIcon[];
}

export const jobTitles: JobType[] = [
  {
    title: 'Swati Rai - Chief Product Officer ',
    company: 'Ex Lazada Ex Meta Ex Google',
    tags: ['Marketplace', 'Social', 'eCommerce', 'Travel'],
    description:
      'Explore our current job openings and find the perfect opportunity for you.',
    socialIcons: [
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/linkedIn.svg',
      },
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/twitter.svg',
      },
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/dribble.svg',
      },
    ],
  },
  {
    title: 'Swati Rai - Chief Product Officer ',
    company: 'Ex Lazada Ex Meta Ex Google',
    tags: ['Marketplace', 'Social', 'eCommerce', 'Travel'],
    description:
      'Explore our current job openings and find the perfect opportunity for you.',
    socialIcons: [
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/linkedIn.svg',
      },
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/twitter.svg',
      },
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/dribble.svg',
      },
    ],
  },
  {
    title: 'Swati Rai - Chief Product Officer ',
    company: 'Ex Lazada Ex Meta Ex Google',
    tags: ['Marketplace', 'Social', 'eCommerce', 'Travel'],
    description:
      'Explore our current job openings and find the perfect opportunity for you.',
    socialIcons: [
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/linkedIn.svg',
      },
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/twitter.svg',
      },
      {
        url: 'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
        path: '/icons/dribble.svg',
      },
    ],
  },
];

export const locations = [
  {
    label: 'India',
    value: 'India',
  },
];
