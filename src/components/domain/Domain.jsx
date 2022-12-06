import React from 'react'
import { homeDomainData } from '../../appData'
import './domain.css'

const {heading, data} = homeDomainData;

export const Domain = () => {
  return (
    <section className="domain-main-section">
      <div className="domain-heading-container">
        <h2>{heading.title}</h2>
        <img src= {heading.img} alt="" />
        <p>{heading.desc}</p>
      </div>

      <div className="domain-tiles-container">


        {

          data.map((ele)=>{
            const {title, img, desc} = ele;
            return (
              <div className="domain-tile-div">
                <div className="domain-tile-img">
                  <img src= {img} alt="" />
                </div>
                <div className="domain-tile-text">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
              </div>
            )
          })

        }
      </div>
    </section>
  )
}
