import s from "./Five_One.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import glasses_two from "/React/Project/my-app/src/Project/Img/glasses_two.png";

const Five_One = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/Four_Three">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>5/10</p>
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
          <p className={s.text_center}>Would you like to protect your eyes from light emanating from screens?</p>
        </div>
      </div>
      <Link to="/Five_Two">
      <div className={s.choice_1}>
        <div className={s.div_text_1}>
          <p className={s.text_1}>Yes</p>
        </div>
      </div>
      </Link>
      <Link to="/Five_Two">
      <div className={s.choice_2}>
        <div className={s.div_text_2}>
          <p className={s.text_1}>No</p>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

export default Five_One;
