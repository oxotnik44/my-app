import s from "./Five_Two.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import glasses_two from "/React/Project/my-app/src/Project/Img/glasses_two.png";
import vertical_line from "/React/Project/my-app/src/Project/Img/vertical_line.png";
import circle_1 from "/React/Project/my-app/src/Project/Img/circle_1.png";
import circle_2 from "/React/Project/my-app/src/Project/Img/circle_2.png";
import circle_3 from "/React/Project/my-app/src/Project/Img/circle_3.png";

const Five_Two = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/Five_One">
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
          <p className={s.text_center}>When you’re out and about, which shade of lenses do you prefer?</p>
        </div>
      </div>
      <Link to="/Six">
        <div className={s.choice_1}>
          <img src={circle_1} className={s.circle_1} />
          <img src={vertical_line} className={s.vertical_line} />
          <div className={s.div_text_1}>
            <p className={s.text_1}>Dark Shade</p>
          </div>
        </div>
      </Link>
      <Link to="/Six">
        <div className={s.choice_2}>
          <img src={circle_2} className={s.circle_2} />
          <img src={vertical_line} className={s.vertical_line} />
          <div className={s.div_text_2}>
            <p className={s.text_1}>Light Shade</p>
          </div>
        </div>
      </Link>
      <Link to="/Six">
        <div className={s.choice_3}>
          <img src={circle_3} className={s.circle_3} />
          <img src={vertical_line} className={s.vertical_line} />
          <div className={s.div_text_3}>
            <p className={s.text_1}>Transitioning Shade</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Five_Two;
