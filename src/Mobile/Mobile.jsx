import cat from "/React/Project/my-app/src/Project/Img/Otimax Dev logo 3.png";
import arrows from "/React/Project/my-app/src/Project/Img/arrows.png";
import glasses from "/React/Project/my-app/src/Project/Img/glasses.png";
import s from "./Mobile.module.css";
import { Link } from "react-router-dom";
const Mobile = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <img className={s.cat} src={cat} />
        </div>
        <div>
          <Link to="/One">
            <img src={arrows} className={s.arrows} />
          </Link>
        </div>
      </div>
      <div className={s.content}>
        <img src={glasses} className={s.glasses} />
      </div>
      <div>
        <p className={s.txt}>Let`s find your perfect pair!</p>
      </div>
      <div>
        <p className={s.text}>
          Take the quiz to easily discover your
          <br /> perfect fit from thousands of styles
        </p>
      </div>
      <div>
        <Link to="/One">
          <button className={s.start_btn}>
            <p className={s.start_txt}>Start Now</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Mobile;
