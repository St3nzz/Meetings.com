import React from "react";
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => (
    <div className={style.nav}>
        <div className={style.nav__item}><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></div>
        <div className={style.nav__item}><NavLink to="/Messages" activeClassName={style.active}>Messages</NavLink></div>
        <div className={style.nav__item}><NavLink to="/News" activeClassName={style.active}>News</NavLink></div>
        <div className={style.nav__item}><NavLink to="/Communities" activeClassName={style.active}>Communities</NavLink></div>
        <div className={style.nav__item}><NavLink to="/Photos" activeClassName={style.active}>Photos</NavLink></div>
    </div>
);

export default Nav;