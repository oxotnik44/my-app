import s from "./Six_Two.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import glasses_two from "/React/Project/my-app/src/Project/Img/glasses_two.png";
import vertical_line from "/React/Project/my-app/src/Project/Img/vertical_line.png";
import face_woman_1 from "/React/Project/my-app/src/Project/Img/face_woman_1.png";
import face_woman_2 from "/React/Project/my-app/src/Project/Img/face_woman_2.png";
import face_woman_3 from "/React/Project/my-app/src/Project/Img/face_woman_3.png";

const Six_Two = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/Five_One">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>6/10</p>
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
            Every face shape has a perfect fit. What’s yours?
          </p>
        </div>
      </div>
      <Link to="/Seven">
        <div className={s.choice_1}>
          <img src={face_woman_1} className={s.face_woman} />
          <img src={vertical_line} className={s.vertical_line} />
          <div className={s.div_text_1}>
            <p className={s.text_1}>I have a long face</p>
          </div>
        </div>
      </Link>
      <Link to="/Seven">
        <div className={s.choice_2}>
          <img src={face_woman_2} className={s.face_woman} />
          <img src={vertical_line} className={s.vertical_line} />
          <div className={s.div_text_2}>
            <p className={s.text_1}>I have a round face</p>
          </div>
        </div>
      </Link>
      <Link to="/Seven">
        <div className={s.choice_3}>
          <img src={face_woman_3} className={s.face_woman} />
          <img src={vertical_line} className={s.vertical_line} />
          <div className={s.div_text_3}>
            <p className={s.text_1}>In between</p>
          </div>
        </div>
      </Link>
      <Link to="/Seven">
        <div>
          <p className={s.text_bot}>I don’t know</p>
        </div>
      </Link>
    </div>
  );
};

export default Six_Two;
