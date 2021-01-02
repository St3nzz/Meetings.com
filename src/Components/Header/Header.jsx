import React from "react";
import logo from "../../images/logo.png";
import style from "./Header.module.css"

const Header = () => (
    <header className={style.header}>
        <div className={style.header__wrapper}>
            <a href="/profile"><img src={logo} alt=""/></a>
            <p>User_Name</p>
        </div>
    </header>
);

export default Header;