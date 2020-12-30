import React from "react";
import style from "./Profile.module.css";
import profile_bg from "../../images/profile_bg.jpg";
import profile_photo from "../../images/profile_photo.jpg";
import Posts from "./Posts/Posts";

const Profile = () => (
    <div className={style.profile}>
        <img src={profile_bg} alt=""/>
        <div className={style.profile__info}>
            <div className={style.profile__photo}>
                <img src={profile_photo} alt=""/>
            </div>
            <div className={style.profile__pass}>
                <div className="profile__pass_name">Name: Nikita St3n</div>
                <div className="profile__pass_age">Age: 17</div>
                <div className="profile__pass_hobby">Hobby: Programming</div>
            </div>
        </div>
        <Posts />
    </div>
);

export default Profile;