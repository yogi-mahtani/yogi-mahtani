import './index.css';

type HamburgerProps = {
  handleClick: () => void;
  active: string;
};

const HamburgerMenu = ({ handleClick, active }: HamburgerProps) => {
  return (
    <h2>asdsad</h2>
    // <div className={`hamburger ${active}`} onClick={handleClick}>
    //   <div className="ham-itm1"></div>
    //   <div className="ham-itm2"></div>
    //   <div className="ham-itm3"></div>
    // </div>
  );
};

export default HamburgerMenu;
