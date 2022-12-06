import React, { useState } from "react";
import { clientsData, linksData } from "../../appData";
import { ClientsTileContainer } from "../clientsTileContainer/ClientsTileContainer";
import "./clientsmid.css";

export const ClientsMid = () => {
  const { header, data } = clientsData;

  const [clients, setClients] = useState(data.enterprises);

  const [isActive, setIsActive] = useState(0);

  const handleClientChange = (id, index) => {
    setClients(data[id]);
    setIsActive(index);
  };

  return (
    <section className="clients-mid-section">
      <div className="clients-mid-header">
        <h2>{header.title}</h2>
        <p>{header.desc}</p>
      </div>
      <div className="client-links-section">
        {linksData.map((ele, index) => {
          return (
            <div
              key={index}
              className={isActive === index ? "links active" : "links"}
              onClick={() => {
                handleClientChange(ele.id, index);
              }}
            >
              {ele.text}
            </div>
          );
        })}
      </div>
      <ClientsTileContainer data={clients} />
    </section>
  );
};
