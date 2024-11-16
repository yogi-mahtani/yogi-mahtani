import Link from 'next/link';

import './index.css';

const PrivacyLinks = () => {
  const privacyLinks: string[] = [
    'Privacy Policy',
    'Terms and Conditions',
    'Cookie Policy',
  ];

  return privacyLinks.map((privacyLink) => (
    <div key={privacyLink} className="privacy-link-item">
      <Link href={`/${privacyLink.toLowerCase().replace(/\s+/g, '-')}`}>
        <p>{privacyLink}</p>
      </Link>
    </div>
  ));
};

export default PrivacyLinks;
