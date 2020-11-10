import React from 'react'
import './planet.css'


const Planet = props => {
  return (
    <div className={'Planet'}>
      <h1>{props.name}</h1>
      <h3>Climate : {props.climate}</h3>
      <p>Population: <strong>{props.population}</strong></p>
    </div>
  )
}

export default Planet