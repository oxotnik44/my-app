import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Mobile from "./Mobile/Mobile";
import One from "./One/One";
import Two_Woman from "./Two/Two_Two/Two_Woman";
import Two_Man from "./Two/Two_One/Two_Man";
import Two_Three from "./Two/Two_Three/Two_Three";
import Three_One from "./Three/Three_One/Three_One";
import Three_Two from "./Three/Three_Two/Three_Two";
import Four_One from "./Four/Four_One/Four_One";
import Four_Two from "./Four/Four_Two/Four_Two";
import Four_Three from "./Four/Four_Three/Four_Three";
import Five_Two from "./Five/Five_Two/Five_Two";
import Five_One from "./Five/Five_One/Five_One";
import Six_One from "./Six/Six_One/Six_One";
import Six_Two from "./Six/Six_Two/Six_Two";
import Six_Three from "./Six/Six_Three/Six_Three";
import Seven from "./Seven/Seven";
import Eight from "./Eight/Eight";
import Nine from "./Nine/Nine";
import Ten from "./Ten/Ten";

import Eleven from "./Eleven/Eleven";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mobile />} />
        <Route path="/One" element={<One />} />
        <Route path="/Two_Woman" element={<Two_Woman />} />
        <Route path="/Two_Man" element={<Two_Man />} />
        <Route path="/Two_Three" element={<Two_Three />} />
        <Route path="/Three_One" element={<Three_One />} />
        <Route path="/Three_Two" element={<Three_Two />} />
        <Route path="/Four_One" element={<Four_One />} />
        <Route path="/Four_Two" element={<Four_Two />} />
        <Route path="/Four_Three" element={<Four_Three />} />
        <Route path="/Five_One" element={<Five_One />} />
        <Route path="/Five_Two" element={<Five_Two />} />
        <Route path="/Six_One" element={<Six_One />} />
        <Route path="/Six_Two" element={<Six_Two />} />
        <Route path="/Six_Three" element={<Six_Three />} />
        <Route path="/Seven" element={<Seven />} />
        <Route path="/Eight" element={<Eight />} />
        <Route path="/Nine" element={<Nine />} />
        <Route path="/Ten" element={<Ten />} />
        <Route path="/Eleven" element={<Eleven />} />
      </Routes>
    </>
  );
};

export default App;
