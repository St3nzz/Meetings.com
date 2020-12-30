import style from "./Nav.module.css";

const Nav = () => (
    <div className={style.main__nav}>
        <div className={style.main__nav_item}><a href="#">Profile</a></div>
        <div className={`${style.main__nav_item} ${style.active}`}><a href="#">Messages</a></div>
        <div className={style.main__nav_item}><a href="#">News</a></div>
        <div className={style.main__nav_item}><a href="#">Communities</a></div>
        <div className={style.main__nav_item}><a href="#">Photos</a></div>
    </div>
);

export default Nav;