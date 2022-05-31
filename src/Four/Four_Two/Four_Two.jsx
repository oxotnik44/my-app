import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import s from "./Four_Two.module.css";
import { Link } from "react-router-dom";
import woman from "/React/Project/my-app/src/Project/Img/woman.png";
import man from "/React/Project/my-app/src/Project/Img/man.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import like from "/React/Project/my-app/src/Project/Img/like.png";
const Four_Two = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
            <img src={arrows_left} className={s.arrows_left} />
        </div>
        <div>
          <p className={s.nums}>4/10</p>
        </div>
        <div>
          <Link to="/">
            <img src={exit} className={s.exit} />
          </Link>
        </div>
        <div />
        <div className={s.stripe}>
          <div className={s.stripe_blue}></div>
        </div>
      </div>
      <div className={s.circle}>
        <img src={like} className = {s.like}/>
      </div>
      <div>
        <Link to="/Four_Three"><p className={s.txt}>No worries, we’ve got you!</p></Link>
      </div>
    </div>
  );
};

export default Four_Two;
