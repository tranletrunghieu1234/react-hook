import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";
ColorBox.propTypes = {};
function getRandomColor() {
  const colorList = ["deeppink", "green", "yellow", "black", "blue"];
  const ranDomIndex = Math.trunc(Math.random() * 5);
  console.log("ranDomIndex", ranDomIndex);
  return colorList[ranDomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color")
      ? localStorage.getItem("color")
      : "deeppink";
    return initColor;
  });
  function handleClickBox() {
    const newColor = getRandomColor();
    console.log("newColor", newColor);
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }
  return (
    <div
      className="colorBox"
      style={{
        backgroundColor: color,
      }}
      onClick={handleClickBox}
    ></div>
  );
}

export default ColorBox;
