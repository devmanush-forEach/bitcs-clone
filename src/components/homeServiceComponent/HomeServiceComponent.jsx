import React from 'react'
import { homeServiceComponentData } from '../../appData';
import './homeServiceComponent.css';

const {heading, data} = homeServiceComponentData;

export const HomeServiceComponent = () => {
  return (
    <section className="home-service-main-section">
        <div className="service-heading-container">
          <h2>{heading.title}</h2>
          <p>{heading.desc}</p>
        </div>

        <div className="service-tiles-container">

            {
              data.map((ele)=>{
                return (
                  <div className="service-tile">
                    <img src= {ele.img} alt="" />
                    <h2>{ele.title}</h2>
                  </div>
                )
              })
            }

        </div>
    </section>
  )
}
