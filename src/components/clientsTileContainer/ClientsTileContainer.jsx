import React from 'react'
import './clientsTileContainer.css'


export const ClientsTileContainer = ({ data }) => {
    return (
        <div className="clients-main-tile-container">
            {
                data.map((ele, index) => {
                    return (
                        <div key={index} className="client-tile">
                            <div className="client-tile-img-div">
                                <img src={ele.img} alt="" />

                            </div>
                            <div className="client-text">

                                <h2>{ele.title}</h2>
                                <p>{ele.desc}</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}
