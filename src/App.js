import React, { useState, useEffect } from "react";
import "./App.css";
import Planets from "./planets/planets";
import ReactPaginate from "react-paginate";
import { Route, Switch } from "react-router-dom";
import PlanetDetail from "./planetDetail/planetDetail";

function App() {
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${currentPage}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPageCount(result.count / 10);
          console.log(result);
          setIsLoaded(true);
          setItems(result.results);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [currentPage]);

  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected + 1);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <h1>Star Wars Universe</h1>
        <Switch>
          {items.map((elem, index) => (
            <Route path="/planets/:name">
              <PlanetDetail {...items} />{" "}
            </Route>
          ))}
        </Switch>

        <Planets items={items} />
        {isLoaded ? (
          <ReactPaginate
            pageCount={pageCount}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange} //
            containerClassName={"container"}
            previousLinkClassName={"page"}
            breakClassName={"page"}
            nextLinkClassName={"page"}
            pageClassName={"page"}
            disabledClassNae={"disabled"}
            activeClassName={"active"}
          />
        ) : (
          <div>Nothing to display</div>
        )}
      </div>
    );
  }
}

export default App;
