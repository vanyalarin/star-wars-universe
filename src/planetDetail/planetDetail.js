import React from "react";
import "./planetDetail.css";

function PlanetDetail(props) {
    console.log(props[0].name)

  return (
    <div className="planetDetail">
      <h1>Name Planets:{}</h1>
      <h3>Rotation period: </h3>
      <p>
        Diameter:<strong></strong>
      </p>
      <p>
        Climate: <strong></strong>
      </p>
      <p>
        Population: <strong></strong>
      </p>
      <p>
        Population: <strong></strong>
      </p>
    </div>
  );
}
export default PlanetDetail;
