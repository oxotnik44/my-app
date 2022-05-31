import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import s from "./One.module.css";
import { Link } from "react-router-dom";
import woman from "/React/Project/my-app/src/Project/Img/woman.png";
import man from "/React/Project/my-app/src/Project/Img/man.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import App from "../App";

  function womanClick(e){
    <App />
    
  }
  function manClick(e){
    <App />
  }

const One = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <Link to="/">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>1/10</p>
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
          <p className={s.text_center}>You are looking for</p>
        </div>
      </div>
      <Link to="/Two_Woman">
        <div className={s.choice_1} onClick = {womanClick}>
          <img src={woman} className={s.img_1} />
          <div className={s.div_text_1}>
            <p className={s.text_1}>Women's Styles</p>
          </div>
        </div>
      </Link>
      <Link to="/Two_Man">
        <div className={s.choice_2} onClick = {manClick}>
          <img src={man} className={s.img_2} />
          <div className={s.div_text_2}>
            <p className={s.text_1}>Men's Styles</p>
          </div>
        </div>
      </Link>
      <Link to="/Two_Three">
        <div>
          <p className={s.text_bot}>I'd like to see both</p>
        </div>
      </Link>
    </div>
  );
};


export default One;
