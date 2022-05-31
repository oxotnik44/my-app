import arrows_left from "/React/Project/my-app/src/Project/Img/arrows_left.png";
import s from "./Two_Three.module.css";
import { Link } from "react-router-dom";
import exit from "/React/Project/my-app/src/Project/Img/exit.png";
import like from "/React/Project/my-app/src/Project/Img/like.png";
import Three_One from "../../Three/Three_One/Three_One";
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
import { useRef, useEffect } from "react";

const App = () => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>123</p>
    </div>
  );
};
const Two_Three = () => {
  return (
    <div className={s.container} id="loading">
      <div className={s.header}>
        <div>
          <img src={arrows_left} className={s.arrows_left} />
        </div>
        <div>
          <p className={s.nums}>2/10</p>
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
        <img src={like} className={s.like} />
      </div>
      <Link to="/Three_One">
        <div>
          <p className={s.txt}>Let`s find your perfect pair!</p>
        </div>
      </Link>
    </div>
  );
};

export default Two_Three;
