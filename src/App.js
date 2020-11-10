import React,{ useState, useEffect } from 'react'
import './App.css';
import Planets from './planets/planets'
import ReactPaginate from 'react-paginate';


function App() {
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);
 
  



 
   



  const URL = `https://swapi.dev/api/planets/?page=${pageCount}`;

 

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          setPageCount(result.count/10);
          console.log(pageCount)
          setIsLoaded(true); 
         
      
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        
      )
      
  }, [pageCount])  
  const handlePageChange = (selectedObject) => {
		setcurrentPage(selectedObject.selected);
		
  };
  
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

    <div className="App">
      <h1>Star Wars Universe</h1>
      
    
  
  <Planets  count={pageCount}  />
  {isLoaded ? (
				<ReactPaginate
					pageCount={pageCount}
					pageRange={2}
					marginPagesDisplayed={2}
					onPageChange={1}//
					containerClassName={'container'}
					previousLinkClassName={'page'}
					breakClassName={'page'}
					nextLinkClassName={'page'}
					pageClassName={'page'}
					disabledClassNae={'disabled'}
					activeClassName={'active'}
				/>
				
			) : (
				<div>Nothing to display</div>
      )}
  </div>
  );
}
}
export default App 
