import React from "react";
import "./developmentServices.css";

export const DevelopmentServices = ({ data }) => {
  // console.log(data);
  return (
    <>
      <section className="dev-ser-main-section">
        <div className="dev-ser-heading">
          <h3 className="text-center">{data.heading.title}</h3>
          <p className="text-center">{data.heading.desc}</p>
        </div>
        <div className="dev-ser-container">
          {data.tiles.map((ele, index) => {
            let { title, desc, img } = ele;
            return (
              <div key={index} className="dev-ser-tiles">
                <div className="tile-img">
                  <img src={img} alt="" />
                </div>
                <div className="tile-content">
                  <h5>{title}</h5>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
