import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import About from "./Pages/About";
import CardsDetails from "./components/Cards/CardsDetails";
import { useSelector, useDispatch } from "react-redux";
import { useGetCharactersQuery } from "./redux/services/api";
import {
  setPageNumber,
  setFilteredData,
  setTotalPages,
} from "./redux/slices/filtersSlice";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardsDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<CardsDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const dispatch = useDispatch();
  const { pageNumber, search, status, gender, residence } = useSelector(
    (state) => state.filters,
  );

  const {
    data: fetchedData = [],
    error,
    isLoading,
  } = useGetCharactersQuery({
    perPage: 12,
    page: pageNumber,
    search,
    status,
    gender,
    residence,
  });

  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      dispatch(setFilteredData(fetchedData));
    }
  }, [fetchedData, dispatch]);

  useEffect(() => {
    const fetchTotalItems = async () => {
      let totalDataCount = 0;
      let page = 1;
      let moreData = true;

      while (moreData) {
        const response = await fetch(
          `https://stranger-things-api.fly.dev/api/v1/characters?${status ? `status=${status}&` : ""}${gender ? `gender=${gender}&` : ""}${residence ? `residence=${residence}&` : ""}${search ? `name=${search}&` : ""}perPage=12&page=${page}`,
        );
        const data = await response.json();
        totalDataCount += data.length;

        if (data.length < 12) {
          moreData = false;
        } else {
          page++;
        }
      }

      dispatch(setTotalPages(Math.ceil(totalDataCount / 12)));
    };

    fetchTotalItems();
  }, [search, status, gender, residence, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Lógica de filtragem por género
  let filteredData = fetchedData;
  if (gender) {
    filteredData = fetchedData.filter(
      (character) =>
        character.gender &&
        character.gender.toLowerCase() === gender.toLowerCase(),
    );
  }

  return (
    <div className="App">
      <h1 className="text-center mb-4 ">Characters</h1>
      <Search />
      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" fetchedData={filteredData} />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default App;
