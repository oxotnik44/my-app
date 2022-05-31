import cat from "/React/Project/my-app/src/Project/Img/Otimax Dev logo 3.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import gift from "/React/Project/my-app/src/Project/Img/gift.png";
import s from "./Eleven.module.css";
import { Link } from "react-router-dom";
const Ten = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div>
          <img className={s.cat} src={cat} />
        </div>
        <div>
          <Link to="/One">
            <img src={exit} className={s.exit} />
          </Link>
        </div>
        <div className={s.stripe}>
          <div className={s.stripe_blue}></div>
        </div>
      </div>
      <div className={s.content}>
        <img src={gift} className={s.gift} />
      </div>
      <div>
        <p className={s.txt}>We've found some awesome frames for you!</p>
      </div>
      <div>
        <p className={s.text}>
        Send the results to your email to receive special discounts.
        </p>
      </div>
      <div>
        <Link to="/One">
          <button className={s.start_btn}>
            <p className={s.start_txt}>Send</p>
          </button>
        </Link>
        <div>
          <p className={s.text_bot}>By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
        </div>
      </div>
    </div>
  );
};

export default Ten;
