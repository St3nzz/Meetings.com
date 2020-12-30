import style from "./Profile.module.css";
import profile_bg from "../../images/profile_bg.jpg";
import profile_photo from "../../images/profile_photo.jpg";

const Profile = () => (
    <div className={style.main__profile}>
        <img src={profile_bg} alt=""/>
        <div className={style.main__profile_info}>
            <div className={style.main__profile_photo}>
                <img src={profile_photo} alt=""/>
            </div>
            <div className={style.main__profile_pass}>
                <div className="main-profile-pass-name">Name: Nikita St3n</div>
                <div className="main-profile-pass-age">Age: 17</div>
                <div className="main-profile-pass-hobby">Hobby: Programming</div>
            </div>
        </div>
        <div className={style.main__profile_posts}>
            <h2>The posts</h2>
            <div className={style.main__profile_posts_post}>
                <h3>Post #1</h3>
                <p>I want to build my own empire</p>
            </div>
            <div className={style.main__profile_posts_post}>
                <h3>Post #2</h3>
                <p>This is the beginning of something bigger</p>
            </div>
        </div>
    </div>
);

export default Profile;