import React from "react";
import style from "./Posts.module.css"
import Post from "./Post/Post"

const Posts = () =>(
    <div className={style.posts}>
        <h2>The posts</h2>
        <div className={style.posts__send}>
            <textarea name="new_post" id="" cols="30" rows="10" placeholder="Enter a new post..."></textarea>
            <button>Send</button>
        </div>
        <Post index='1' like_count='12' name='Andrey ' second_name='Kuznetsov' message='I want to build my own empire' />
        <Post index='2' like_count='25' name='Vladimir' second_name='Ivanov' message='This is the beginning of something bigger' />
    </div>
);

export default Posts;