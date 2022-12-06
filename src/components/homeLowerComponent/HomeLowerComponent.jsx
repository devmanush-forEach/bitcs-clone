import React from "react";
import { homeLowerData } from "../../appData";
import { Slider } from "../slider/Slider";
import "./homeLowerComponent.css";

export const HomeLowerComponent = () => {
  const { title, line, desc, logos } = homeLowerData;

  return (
    <section className="home-lower-main-section">
      <div className="home-lower-heading">
        <h2>{title}</h2>
        <img src={line} alt="" />
      </div>

      <div className="home-lower-container">
        <div className="lower-left">
          <Slider />
        </div>
        <div className="home-lower-about">
          <div>
            <div className="lower-logo">
              <img src={require("../../assets/logos/bitcs.jpg")} alt="" />
            </div>
            <div className="lower-stars-container">
              <i className="fa fa-star final-star"> </i>
              <i className="fa fa-star final-star"> </i>
              <i className="fa fa-star final-star"> </i>
              <i className="fa fa-star final-star"> </i>
              <i className="fa fa-star final-star"> </i>
            </div>
            <p>{desc}</p>

            <div className="lower-company-logos-container">
              {logos.map((ele) => {
                return (
                  <div className="home-lower-logos">
                    <img src={ele} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
