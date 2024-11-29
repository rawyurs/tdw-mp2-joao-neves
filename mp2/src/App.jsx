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
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    let api = `https://stranger-things-api.fly.dev/api/v1/characters?perPage=12&page=${pageNumber}`;

    if (search) api += `&name=${search}`;
    if (status) api += `&status=${status}`;
    if (gender) api += `&gender=${gender}`;

    (async function () {
      try {
        let data = await fetch(api).then((res) => res.json());

        if (gender) {
          data = data.filter(
            (character) => character.gender.toLowerCase() === gender.toLowerCase()
          );
        }

        updateFetchedData(data);
        setTotalResults(data.length || 0);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        updateFetchedData([]);
        setTotalResults(0);
      }
    })();
  }, [search, pageNumber, status, gender]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu-medium my-5">
        Stranger Things <span className="text-danger">WiKi</span>
      </h1>


      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">

          <Filters
            setPageNumber={setPageNumber}
            setStatus={setStatus}
            setGender={setGender}
          />
          <div className="col-8">
            <div className="row">
              <Cards fetchedData={fetchedData} />
            </div>
          </div>
        </div>
      </div>

      {!search && (
        <Pagination
          fetchedData={fetchedData}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </div>
  );
}

export default App;
