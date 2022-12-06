import React from "react";
import { DevelopmentServices } from "../../components/developmentServices/DevelopmentServices";
import "./services.css";
import serviceBgi from "../../assets/background/service-bgi.jpg";
import { hwwData, devNserData } from "../../appData";

export const Services = () => {
  return (
    <>
      <section className="service-main-head">
        <img src={serviceBgi} alt="" className="service-main-bgi" />
        <div className="service-main-head-content">
          <h2>Services</h2>
          <p>
            The services that help you to hire the best and top developers,
            program managers as well as the remote workers and remote team our
            all the developers are prime and exclusive.
          </p>
        </div>
      </section>
      <DevelopmentServices data={devNserData} />
      <DevelopmentServices data={hwwData} />
      <section className="service-bottom-section">
        <div className="text-header">
          <h3 className="text-center">
            Ready to craft finesses with our development team?
          </h3>
          <p className="text-center">
            Let`s connect to transform your business vision into an out-of-box
            web and mobile app solution.
          </p>
          <button className="btn-outline-primary">Let's get Started</button>
        </div>
      </section>
    </>
  );
};
