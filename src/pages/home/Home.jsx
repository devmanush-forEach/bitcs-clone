import "./home.css";
import React from "react";
import { Link } from "react-router-dom";
import { HireComponent } from "../../components/hireComponent/HireComponent";
import { HomeServiceComponent } from "../../components/homeServiceComponent/HomeServiceComponent";

import { WhatWeDo } from "../../components/whatWeDo/WhatWeDo";
import { Domain } from "../../components/domain/Domain";
import { HomeLowerComponent } from "../../components/homeLowerComponent/HomeLowerComponent";

const homePage_data = {
  intro: {
    heading: "We code your ideas",
    title:
      "Any idea knocked in your mind? Let us know, we give the way to your ideas.",
    desc: "We operates the best technology to serve you quality product, enhance your business globally and recommend you all market leading solutions.",
  },
};

export const Home = () => {
  return (
    <>
      <div className="home-main-container ">
        <div className="bg"></div>
        <div className="home-upper-content container">
          <div className="upper-left-intro">
            <p className="main-intro-heading">{homePage_data.intro.heading}</p>
            <p className="main-intro-title">{homePage_data.intro.title}</p>
            <p className="main-intro-desc">{homePage_data.intro.desc}</p>

            <button className="intro-contact-btn">
              <Link className="contact-btn-link" to={"/contact"}>
                contact us
              </Link>
            </button>
          </div>
        </div>
      </div>
      <HireComponent />
      <HomeServiceComponent />
      <WhatWeDo />
      <Domain />
      <HomeLowerComponent />
    </>
  );
};
