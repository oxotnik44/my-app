import s from "./Two_Man.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import glasses_one from "/React/Project/my-app/src/Project/Img/glasses_one.png";

const Two_Man = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/One">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>2/10</p>
        </div>
        <div>
          <Link to="/">
            <img src={exit} className={s.exit} />
          </Link>
        </div>
        <div className={s.stripe}>
          <div className={s.stripe_blue}></div>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.text_center_div}>
          <p className={s.text_center}>
            What type of glasses are you looking for?
          </p>
        </div>
      </div>
      <Link to="/Two_Three">
        <div className={s.choice_1}>
          <img src={glasses_one} className={s.img_1} />
          <div className={s.div_text_1}>
            <p className={s.text_1}>Eyeglasses</p>
          </div>
        </div>
      </Link>
      <Link to="/Two_Three">
        <div className={s.choice_2}>
          <img src={glasses_one} className={s.img_2} />
          <div className={s.div_text_2}>
            <p className={s.text_1}>Sunglasses</p>
          </div>
        </div>
      </Link>

      <Link to="/Two_Three">
        <div>
          <p className={s.text_bot}>I want to see both</p>
        </div>
      </Link>
    </div>
  );
};
export default Two_Man;
