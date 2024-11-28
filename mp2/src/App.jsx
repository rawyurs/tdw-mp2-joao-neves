import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);

  useEffect(() => {
    let api = search
      ? `https://stranger-things-api.fly.dev/api/v1/characters?name=${search}`
      : `https://stranger-things-api.fly.dev/api/v1/characters?perPage=12&page=${pageNumber}`;

    (async function () {
      try {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        updateFetchedData([]);
      }
    })();
  }, [search, pageNumber]);


  return (
    <div className="App">
      <h1 className="text-center ubuntu-medium my-5">
        Stranger Things <span className="text-danger">WiKi</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

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

      {!search && (
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </div>
  );
}

export default App;

