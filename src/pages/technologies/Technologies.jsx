import React from "react";
import "./technologies.css";
import { devNserData, techMidData } from "../../appData";
import { DevelopmentServices } from "../../components/developmentServices/DevelopmentServices";
import banner_img from "../../assets/background/tech-bgi.jpg";
import { TechMid } from "../../components/tech-mid/TechMid";

export const Technologies = () => {
  return (
    <>
      <section className="tech-banner-section">
        <img src={banner_img} alt="jefferson" className="tech-banner-bgi" />
        <div className="tech-banner-content">
          <h2>Technologies</h2>
          <p>
            We work with technology step by step as we use the best technologies
            to stress-free you from the workload. Technology gives the wings to
            everyone to explore as well as to grow and build their careers.
          </p>
        </div>
      </section>

      <section className="tech-header-section">
        <h1 className="tech-header-heading">Technologies</h1>
        <h3 className="tech-header-title">
          Unlock the potentials of the emerging and insightful technology
          solutions for rapid business outcomes
        </h3>
        <p className="tech-header-desc">
          Feel like your key to solutions is misplaced? Hello!!! Bitcs, here!
          Let us know all you question related to the potential or insightful
          technology and get the all answers of your doubt. We unlock all the
          locked door for your business.{" "}
        </p>
        <p className="tech-header-desc">
          For the best outcome you can easily trust us, as we prove all aspects.
          We work to free your company with all the workloads and increase your
          business.{" "}
        </p>
      </section>

      <TechMid data={techMidData} />
      <DevelopmentServices data={devNserData} />
    </>
  );
};
