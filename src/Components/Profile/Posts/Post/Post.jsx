import React from "react";
import style from "./Post.module.css"
import avatar from "../../../../images/ava1.jpg"

const Post = (props) =>(
    <div className={style.post}>
        <div className={style.post__author}>
            <p>{props.name}</p>
            <p>{props.second_name}</p>
            <img src={avatar} alt=""/>
        </div>
        <div className={style.post__content}>
            <h3>Post #{props.index}</h3>
            <p>{props.message}</p>
        </div>
        <div className={style.post__likes}>
            <p>{props.like_count}</p>
            <span>Like</span>
        </div>
    </div>
);

export default Post;