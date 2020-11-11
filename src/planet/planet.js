import React from "react";
import "./planet.css";
import { withRouter } from "react-router-dom";

const Planet = (props) => {
  return (
    <div
      className={"Planet"}
      onClick={() => props.history.push("/planets/" + props.name.toLowerCase())}
    >
      <h1>{props.name}</h1>
      <h3>Climate : {props.climate}</h3>
      <p>
        Population: <strong>{props.population}</strong>
      </p>
    </div>
  );
};

export default withRouter(Planet);
