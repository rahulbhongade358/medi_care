import React from "react";
import Servicedata from "./Servicedata";
import Servicecard from "./Servicecard";
import "./Service.css";

const ServiceMap = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-service-slide">
        {Servicedata.map((service, i) => (
          <div key={i} className="flex-shrink-0 min-w-full ">
            <Servicecard Name={service.Name} Info={service.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMap;
