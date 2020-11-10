import React, { useState, useEffect } from 'react'
import Planet from './planet/planet'
function Planets(props)  {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const countPage = props.count


  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${countPage}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
         
      
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        
      )
      
  }, [])  
  
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{
        width: 600,
        margin: 'auto',
        paddingTop: '20px',
        marginBlock:'20',
        display:'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        gridTemplateColumns: '1fr 1fr'
        
      }}>
        
         {items && items.map((item, index) => (     
        <Planet 
          key={index}
          name = {item.name}
          climate={item.climate}
          population={item.population}
        />
        ))}
        
      </div>
    )
}
}
export default Planets