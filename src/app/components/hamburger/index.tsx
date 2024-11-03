import './index.css'
export function Hamburger(props){
    return (
    <div className="hamburger" onClick={props.onClick}>
        <div className="ham-itm1"></div>
        <div className="ham-itm2"></div>
        <div className="ham-itm3"></div>
    </div>
    )
}