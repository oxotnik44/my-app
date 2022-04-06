import React from "react";
import { Link } from "react-router-dom";
import s from "/React/Project/my-app/src/Project/Css/Style.module.css";
import i from "/React/Project/my-app/src/Project/Css/Img.module.css";
import t from "/React/Project/my-app/src/Project/Css/Text.module.css";
import b from "/React/Project/my-app/src/Project/Css/Button.module.css";
import cat from "/React/Project/my-app/src/Project/Img/Otimax Dev logo 3.png";
import arrows from "/React/Project/my-app/src/Project/Img/arrows.png";
import glasses from "/React/Project/my-app/src/Project/Img/glasses.png";

const Mobile = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <img className={i.cat} src={cat} />
        </div>
        <div>
         <Link to = "/One"> <img src={arrows} className={i.arrows}  /></Link>
        </div>
      </div>
      <div className={s.content}>
        <img src={glasses} className={i.glasses} />
      </div>
      <div>
        <p className={t.txt}>Let`s find your perfect pair!</p>
      </div>
      <div className={t.text}>
        <p>
          Take the quiz to easily discover your
          <br /> perfect fit from thousands of styles
        </p>
      </div>
      <div>
        <Link to = "/One">
          <button className={b.start}>
            <p className={t.start}>Start Now</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Mobile;
