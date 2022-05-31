import s from "./Four_One.module.css";
import { Link } from "react-router-dom";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import glasses_two from "/React/Project/my-app/src/Project/Img/glasses_two.png";
import shackle from "/React/Project/my-app/src/Project/Img/shackle.png";
import line from "/React/Project/my-app/src/Project/Img/line_1.png";
const Four_One = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/Three_Two">
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
          <p className={s.text_center}>What’s your current frame size?</p>
        </div>
      </div>
      <div>
        <img src={shackle} className={s.shackle} />
      </div>
      <div>
        <p className={s.line_text_1}>Lens width</p>
      </div>
      <div>
        <p className={s.line_text_2}>Bridge width</p>
      </div>
      <div>
        <p className={s.line_text_3}>Temple lenght</p>
      </div>
      <Link to="/Four_Two">
        <div className={s.small}>
          <p className={s.small_text}>Small</p>
          <p className={s.small_size}>42-48 mm</p>
        </div>
      </Link>
      <Link to="/Four_Two">
        <div className={s.medium}>
          <p className={s.medium_text}>Medium</p>
          <p className={s.medium_size}>49-53 mm</p>
        </div>
      </Link>
      <Link to="/Four_Two">
        <div className={s.large}>
          <p className={s.large_text}>Large</p>
          <p className={s.large_size}>54-58 mm</p>
        </div>
      </Link>
      <Link to="/Four_Two">
        <div>
          <p className={s.text_bot}>I don’t know</p>
        </div>
      </Link>
    </div>
  );
};

export default Four_One;
