import './index.css';

type HamburgerProps = {
  onClick: () => void;
};

export function Hamburger({ onClick }: HamburgerProps) {
  return (
    <div className="hamburger" onClick={onClick}>
      <div className="ham-itm1"></div>
      <div className="ham-itm2"></div>
      <div className="ham-itm3"></div>
    </div>
  );
}
