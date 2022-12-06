import React from "react";
import { WhatWeDoData } from "../../appData";
import "./whatWeDo.css";

const { heading, upperTileData, lowerTileData } = WhatWeDoData;

export const WhatWeDo = () => {
  return (
    <section className="wwd-main-section">
      <div className="wwd-heading-container">
        <h2>{heading.title}</h2>
        <img src={heading.img} alt="" />
      </div>

      <div className="wwd-upper-tile-container">
        {upperTileData.map((ele) => {
          return (
            <div className="wwd-upper-tile">
              <img src={ele.img} alt="" />
              <h2>{ele.title}</h2>
              <p>{ele.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="wwd-lower-tile-container">
        {lowerTileData.map((ele) => {
          return (
            <div className="wwd-lower-tile">
              <i className={ele.img}> </i>
              <h2>{ele.title}</h2>
              <p>{ele.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
