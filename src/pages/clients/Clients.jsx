import React from "react";
import "./clients.css";

import poster_bgi from "../../assets/background/clients-bgi.jpg";
import { ClientsMid } from "../../components/clientsMid/ClientsMid";
import { Slider } from "../../components/slider/Slider";

export const Clients = () => {
  return (
    <>
      <section className="clients-poster-section">
        <img className="clients-poster-image" src={poster_bgi} alt="" />
        <div className="clients-poster-text">
          <h2>Our Client</h2>
          <p>
            We love to see the happy face that we see on the faces of our
            clients who satisfied and recommend us in their working profession.
          </p>
        </div>
      </section>
      <ClientsMid />
      <section className="slider-section">
        <Slider />
      </section>
    </>
  );
};
