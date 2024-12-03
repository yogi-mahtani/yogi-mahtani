import Link from 'next/link';
import './styles.css';

type NavLinkProps = {
  url: string;
  name: string;
};

const NavLink: React.FC<NavLinkProps> = ({ url, name }) => {
  return (
    <Link href={url} passHref>
      <div className="nav-link">{name}</div>
    </Link>
  );
};

export default NavLink;
