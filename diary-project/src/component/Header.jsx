import "./Header.css";

const Header= ({ title, leftChild, rightChild }) => {
    return (
        <div className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_left">{title}</div>
            <div className="header_left">{rightChild}</div>
        </div>
    );  
};
export default Header;