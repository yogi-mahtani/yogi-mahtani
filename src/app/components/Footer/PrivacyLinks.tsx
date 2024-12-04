import NavLink from '@/app/ui-kit/NavLink';

import './index.css';

const PrivacyLinks = () => {
  const privacyLinks: string[] = [
    'Privacy Policy',
    'Terms and Conditions',
    'Cookie Policy',
  ];

  return privacyLinks.map((privacyLink) => (
    <div key={privacyLink} className="privacy-link-item">
      <NavLink
        key={privacyLink}
        underline={true}
        url={`/${privacyLink.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {privacyLink}
      </NavLink>
    </div>
  ));
};

export default PrivacyLinks;
