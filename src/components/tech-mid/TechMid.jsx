import React from "react";
import { useState } from "react";
import "./techMid.css";

export const TechMid = ({ data }) => {
  const [activePara, setActivePara] = useState(null);

  const addActivePara = ({ target }) => {
    const index = target.getAttribute("index");
    setActivePara(index);
    console.log(index);
  };

  document.addEventListener("mousedown", (e) => {
    const clas = e.target.getAttribute("index");
    if (!clas) {
      setActivePara(null);
    }
  });

  return (
    <>
      <section className="tech-mid-section">
        <div className="tech-mid-header">
          <h2>{data.heading.title}</h2>
          <p>{data.heading.desc}</p>
        </div>

        <div className="tech-mid-tile-container">
          {data.tiles.map((ele, index) => {
            return (
              <div
                key={index}
                className="tech-mid-tiles"
                onClick={addActivePara}
                index={index}
              >
                <h3 index={index}>{ele.title}</h3>
                <p
                  className={
                    activePara == index ? "active_tm_para" : "display_none"
                  }
                >
                  {ele.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
