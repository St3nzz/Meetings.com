import profile_bg from "../images/profile_bg.jpg";
import profile_photo from "../images/profile_photo.jpg";

const Main = () => (
    <div className="main-content">
        <div className="container">
            <div className="main-nav">
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Communities</a></div>
                <div><a href="#">Photos</a></div>
            </div>
            <div className="main-profile">
                <img src={profile_bg} alt=""/>
                <div className="main-profile-info">
                    <div className="main-profile-photo">
                        <img src={profile_photo} alt=""/>
                    </div>
                    <div className="main-profile-pass">
                        <div className="main-profile-pass-name">Name: Nikita St3n</div>
                        <div className="main-profile-pass-age">Age: 17</div>
                        <div className="main-profile-pass-hobby">Hobby: Programming</div>
                    </div>
                </div>
                <div className="main-profile-posts">
                    <h2>The posts</h2>
                    <div className="main-profile-posts-post">
                        <h3>Post #1</h3>
                        <p>I want to build my own empire</p>
                    </div>
                    <div className="main-profile-posts-post">
                        <h3>Post #2</h3>
                        <p>This is the beginning of something bigger</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Main;