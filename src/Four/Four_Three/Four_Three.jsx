import s from "./Four_Three.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import glasses_two from "/React/Project/my-app/src/Project/Img/glasses_two.png";

const Four_Three = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/Four_One">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>4/10</p>
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
          <p className={s.text_center}>How wide would you say your face is?</p>
        </div>
      </div>
      <Link to="/Five_One">
        <div className={s.choice_1}>
          <div className={s.div_text_1}>
            <p className={s.text_1}>Wider Than Average</p>
          </div>
        </div>
      </Link>
      <Link to="/Five_One">
        <div className={s.choice_2}>
          <div className={s.div_text_2}>
            <p className={s.text_1}>Average</p>
          </div>
        </div>
      </Link>
      <Link to="/Five_One">
        <div className={s.choice_3}>
          <div className={s.div_text_3}>
            <p className={s.text_1}>Narrower Than Average</p>
          </div>
        </div>
      </Link>
      <Link to="/Five_One">
        <div>
          <p className={s.text_bot}>I’m not sure</p>
        </div>
      </Link>
    </div>
  );
};

export default Four_Three;
