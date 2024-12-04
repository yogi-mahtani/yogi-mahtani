import Link from 'next/link';

import { LinkItem } from './styled';

type NavLinkProps = {
  url: string;
  underline?: boolean;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({
  url,
  underline = false,
  children,
}) => {
  return (
    <Link href={url} passHref>
      <LinkItem underline={underline.toString()}>{children}</LinkItem>
    </Link>
  );
};

export default NavLink;
