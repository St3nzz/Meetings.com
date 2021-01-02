import React from "react";
import style from "./Messages.module.css"

const Messages = () => (
    <div className={style.messages}>
        <div className={style.names}>
            <div className={style.title}>
                Messages
            </div>
            <hr/>
            <div className={style.item}>
                <a href="#">Andrey Ivanov</a>
            </div>
            <div className={style.item + ' ' + style.active}>
                <a href="#">Vasiliy Kuznetsov</a>
            </div>
            <div className={style.item}>
                <a href="#">Sergey Osipov</a>
            </div>
            <div className={style.item}>
                <a href="#">Alexandr Smirnov</a>
            </div>
        </div>
        <div className={style.splitLine}></div>
        <div className={style.dialogs}>
            <div className={style.message}>Vasiliy: Who are u?</div>
            <div className={style.message}>You: I am Nikita, and u?</div>
            <div className={style.message}>Vasiliy: You don't need to know it...</div>
        </div>
    </div>
);

export default Messages;