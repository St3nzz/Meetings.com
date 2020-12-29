import logo from "../images/logo.png";

const Header = () => (
    <header className="header">
        <div className="header-wrapper">
            <img src={logo} alt=""/>
            <p>User_Name</p>
        </div>
    </header>
);

export default Header;