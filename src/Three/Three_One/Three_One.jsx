import s from "./Three_One.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import glasses_two from "/React/Project/my-app/src/Project/Img/glasses_two.png";
const Three_One = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/One">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>3/10</p>
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
          <p className={s.text_center}>Do you need vision correction?</p>
        </div>
      </div>
      <Link to="/Three_Two">
      <div className={s.choice_1}>
        <div className={s.div_text_1}>
          <p className={s.text_1}>Yes</p>
        </div>
      </div>
      </Link>
      <Link to="/Four_One">
      <div className={s.choice_2}>
        <div className={s.div_text_2}>
          <p className={s.text_1}>No</p>
        </div>
      </div>
      </Link>
      <Link to="/Four_One">
        <div>
          <p className={s.text_bot}>Skip</p>
        </div>
      </Link>
    </div>
  );
};

export default Three_One;
