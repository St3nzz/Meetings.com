import React from "react";
import style from "./Nav.module.css";

const Nav = () => (
    <div className={style.nav}>
        <div className={style.nav__item}><a href="#">Profile</a></div>
        <div className={`${style.nav__item} ${style.active}`}><a href="#">Messages</a></div>
        <div className={style.nav__item}><a href="#">News</a></div>
        <div className={style.nav__item}><a href="#">Communities</a></div>
        <div className={style.nav__item}><a href="#">Photos</a></div>
    </div>
);

export default Nav;