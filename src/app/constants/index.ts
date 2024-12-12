interface NavLinks {
  about: string;
  resources: string;
  offerings: string;
}

interface ButtonLinks {
  jobs: string;
  findTalent: string;
}

interface AnimationConfigs {
  speed: number,
  waitTime: number
}

export const NAV_LINKS: NavLinks = {
  about:
    'https://www.linkedin.com/company/fyndertalent/about/?viewAsMember=true',
  resources:
    'https://www.linkedin.com/company/104136832/admin/page-posts/published/',
  offerings: '#',
};

export const BUTTON_LINKS: ButtonLinks = {
  jobs: 'https://www.linkedin.com/company/fyndertalent/jobs/?viewAsMember=true',
  findTalent: '#',
};



export const animationConfigs: AnimationConfigs = {
  speed: 100,
  waitTime: 1000
};