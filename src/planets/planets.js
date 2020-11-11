import React from "react";
import Planet from "../planet/planet";
import "./planets.css";
function Planets(props) {
  return (
    <div className="planets">
      {props.items &&
        props.items.map((item, index) => (
          <Planet
            key={index}
            name={item.name}
            climate={item.climate}
            population={item.population}
          />
        ))}
    </div>
  );
}
export default Planets;
