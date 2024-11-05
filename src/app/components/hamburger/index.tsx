import './index.css';

type HamburgerProps = {
  onClick: () => void;
  active: string;
};

const Hamburger = ({ onClick, active }: HamburgerProps) => {
  return (
    <div className={`hamburger ${active}`} onClick={onClick}>
      <div className="ham-itm1"></div>
      <div className="ham-itm2"></div>
      <div className="ham-itm3"></div>
    </div>
  );
};

export default Hamburger;
