import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Item from "./item";
import "./style.css";
import s from "./Eight.module.css";
import glass_1 from "/React/Project/my-app/src/Project/Img/glass/glass_1.png";
import glass_2 from "/React/Project/my-app/src/Project/Img/glass/glass_2.png";
import glass_3 from "/React/Project/my-app/src/Project/Img/glass/glass_3.png";
import glass_4 from "/React/Project/my-app/src/Project/Img/glass/glass_4.png";
import glass_5 from "/React/Project/my-app/src/Project/Img/glass/glass_5.png";
import glass_6 from "/React/Project/my-app/src/Project/Img/glass/glass_6.png";
import glass_7 from "/React/Project/my-app/src/Project/Img/glass/glass_7.png";
import glass_8 from "/React/Project/my-app/src/Project/Img/glass/glass_8.png";
import glass_9 from "/React/Project/my-app/src/Project/Img/glass/glass_9.png";
import glass_10 from "/React/Project/my-app/src/Project/Img/glass/glass_10.png";
import glass_11 from "/React/Project/my-app/src/Project/Img/glass/glass_11.png";
import glass_12 from "/React/Project/my-app/src/Project/Img/glass/glass_1.png";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Eight() {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
        <div>
          <Link to="/Seven">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>8/10</p>
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
              Which frame style are you looking for?
            </p>
            <p className={s.text_center_2}>You can pick more than one.</p>
          </div>
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              <Link to="/Nine">
                <Item>
                  <div className={s.qwe}>
                    <img src={glass_1} className={s.glass_img} />
                    <p className={s.glass_text}>Rectangle</p>
                  </div>
                </Item>
              </Link>
                <Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_2} className={s.glass_img} />
                      <p className={s.glass_text_2}>Wayframe</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_3} className={s.glass_img} />
                      <p className={s.glass_text_3}>Cat Eye</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_4} className={s.glass_img} />
                      <p className={s.glass_text_4}>Browline</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_5} className={s.glass_img} />
                      <p className={s.glass_text_5}>Round</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_6} className={s.glass_img} />
                      <p className={s.glass_text_6}>Rimless</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_7} className={s.glass_img} />
                      <p className={s.glass_text_7}>Aviator</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_8} className={s.glass_img} />
                      <p className={s.glass_text_8}>Oval</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_9} className={s.glass_img} />
                      <p className={s.glass_text_9}>Square</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_10} className={s.glass_img} />
                      <p className={s.glass_text_10}>Geometric</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_11} className={s.glass_img} />
                      <p className={s.glass_text_11}>Oversized</p>
                    </div>
                  </Item>
                </Link><Link to="/Nine">
                  <Item>
                    <div className={s.qwe}>
                      <img src={glass_12} className={s.glass_img} />
                      <p className={s.glass_text_12}>Wrap</p>
                    </div>
                  </Item>
                </Link>
                
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eight;
