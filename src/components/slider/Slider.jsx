import React from "react";

import "./slider.css";

import { sliderData } from "../../appData";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const Slider = () => {
  const tileRef = useRef();
  const tileBoxRef = useRef();
  const [tileIndex, setTileIndex] = useState(0);

  const slideToNext = () => {
    if (tileIndex === sliderData.length - 1) {
      tileBoxRef.current.style.transitionDuration = "0ms";
      setTileIndex(0);
    } else {
      tileBoxRef.current.style.transitionDuration = "2000ms";
      setTileIndex(tileIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(slideToNext, 2500);
    return () => clearInterval(interval);
  }, [tileIndex]);

  const tileWidth = tileRef?.current?.clientWidth + 20;

  return (
    <div className="slider-main-div">
      <div
        className="slider-tiles-container"
        style={{ transform: `translateX(-${tileIndex * tileWidth}px)` }}
        ref={tileBoxRef}
      >
        {sliderData.map((ele) => {
          return (
            <div className="slider-tile" ref={tileRef}>
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
