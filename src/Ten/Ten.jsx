import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Item from "./item";
import "./style.css";
import s from "./Ten.module.css";
import comp_1 from "/React/Project/my-app/src/Project/Img/comp/comp_1.png";
import comp_2 from "/React/Project/my-app/src/Project/Img/comp/comp_2.png";
import comp_3 from "/React/Project/my-app/src/Project/Img/comp/comp_3.png";
import comp_4 from "/React/Project/my-app/src/Project/Img/comp/comp_4.png";
import comp_5 from "/React/Project/my-app/src/Project/Img/comp/comp_5.png";
import comp_6 from "/React/Project/my-app/src/Project/Img/comp/comp_6.png";
import comp_7 from "/React/Project/my-app/src/Project/Img/comp/comp_7.png";
import comp_8 from "/React/Project/my-app/src/Project/Img/comp/comp_8.png";
import comp_9 from "/React/Project/my-app/src/Project/Img/comp/comp_9.png";
import comp_10 from "/React/Project/my-app/src/Project/Img/comp/comp_10.png";
import comp_11 from "/React/Project/my-app/src/Project/Img/comp/comp_11.png";
import comp_12 from "/React/Project/my-app/src/Project/Img/comp/comp_12.png";
import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Ten() {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>
        <div>
          <Link to="/Nine">
            <img src={arrows_left} className={s.arrows_left} />
          </Link>
        </div>
        <div>
          <p className={s.nums}>10/10</p>
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
            Choose your favorite brands
            </p>
            <p className={s.text_center_2}>You can pick more than one.</p>
          </div>
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              <Link to="/Eleven">
                <Item>
                  <div className={s.qwe}>
                    <img src={comp_1} className={s.glass_img_1} />
                    <p className={s.glass_text}>Rectangle</p>
                  </div>
                </Item>
              </Link>
                <Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_2} className={s.glass_img_2} />
                      <p className={s.glass_text_2}>Wayframe</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_3} className={s.glass_img_3} />
                      <p className={s.glass_text_3}>Cat Eye</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_4} className={s.glass_img_4} />
                      <p className={s.glass_text_4}>Browline</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_5} className={s.glass_img_5} />
                      <p className={s.glass_text_5}>Round</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_6} className={s.glass_img_6} />
                      <p className={s.glass_text_6}>Rimless</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_7} className={s.glass_img_7} />
                      <p className={s.glass_text_7}>Aviator</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_8} className={s.glass_img_8} />
                      <p className={s.glass_text_8}>Oval</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_9} className={s.glass_img_9} />
                      <p className={s.glass_text_9}>Square</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_10} className={s.glass_img_10} />
                      <p className={s.glass_text_10}>Geometric</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_11} className={s.glass_img_11} />
                      <p className={s.glass_text_11}>Oversized</p>
                    </div>
                  </Item>
                </Link><Link to="/Eleven">
                  <Item>
                    <div className={s.qwe}>
                      <img src={comp_12} className={s.glass_img_12} />
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

export default Ten;
