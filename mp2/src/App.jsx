import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';

function App() {

  let [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber)
  let [fetchedData, updateFetchedData] = useState([]);


  let api = `https://stranger-things-api.fly.dev/api/v1/characters?perPage=12&page=${pageNumber}`;


  useEffect(() => {

    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center ubuntu-medium my-5">
        Stranger Things <span className="text-danger">WiKi</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards fetchedData={fetchedData} />
            </div>
          </div>
        </div>
      </div>

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
