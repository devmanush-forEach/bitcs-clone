import React from "react";
import { hireComponentData } from "../../appData";

import "./hireComponent.css";

export const HireComponent = () => {
  const { header, data } = hireComponentData;

  return (
    <section className="home-dedicated-main-container">
      <div className="dedicated-header">
        <h1>{header.title}</h1>
        <img src={header.img} alt="" />
      </div>
      <div className="hire-tile-container">
        {data.map((ele) => {
          return (
            <div className="hire-tile">
              <div className="hire-tile-img">
                <img src={ele.img} alt="" />
              </div>
              <div className="hire-tile-text">
                <h2>{ele.title}</h2>
                <p>{ele.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
