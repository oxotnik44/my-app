import s from "./Nine.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";

const Nine = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/Eight">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>9/10</p>
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
          Are you looking for any particular eyewear brands?
          </p>
        </div>
      </div>
      <Link to="/Ten">
        <div className={s.choice_1}>
          <div className={s.div_text_1}>
            <p className={s.text_1}>Yes, I have some in mind</p>
          </div>
        </div>
      </Link>
      <Link to="/Ten">
        <div className={s.choice_2}>
          <div className={s.div_text_2}>
            <p className={s.text_1}>No, brand isn't important</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Nine;
