import React from "react";

import "./slider.css";

import { sliderData } from "../../appData";

export const Slider = () => {
  return (
    <div className="slider-main-div">
      <div className="slider-tiles-container">
        {sliderData.map((ele) => {
          return (
            <div className="slider-tile">
              <img className="slider-img" src={ele.img} alt="" />
              <h2 className="slider-name">{ele.name}</h2>
              <h2 className="slider-user-info">{ele.info}</h2>
              <h2 className="slider-title">{ele.title}</h2>
              <p className="slider-desc">{ele.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="owl-dot-section"></div>
    </div>
  );
};
