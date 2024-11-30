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
  let [residence, setResidence] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let [filteredDataCount, setFilteredDataCount] = useState(0); // Contador de itens filtrados
  const totalItems = 108; // Total conhecido de itens
  const itemsPerPage = 12; // Número de itens por página

  // Função para calcular o número total de páginas
  const calculateTotalPages = (totalItems) => {
    return Math.ceil(totalItems / itemsPerPage);
  };

  // Função para buscar o número total de itens com filtros aplicados
  const fetchTotalItems = async () => {
    let api = `https://stranger-things-api.fly.dev/api/v1/characters`;

    let query = [];
    if (search) query.push(`name=${search}`);
    if (status) query.push(`status=${status}`);
    if (gender) query.push(`gender=${gender}`);
    if (residence) query.push(`residence=${residence}`);

    if (query.length > 0) api += `?${query.join("&")}`;

    try {
      const response = await fetch(api);
      const data = await response.json();
      // Atualiza o total filtrado de itens
      setFilteredDataCount(data.length);
      console.log("Total de Itens Filtrados:", data.length); // Verificação

      // Verifica e ajusta a paginação se necessário
      if (pageNumber > 1 && data.length < itemsPerPage * (pageNumber - 1)) {
        setPageNumber(1); // Reseta para a página 1 se a página atual não tiver resultados
      }
    } catch (error) {
      console.error("Erro ao buscar dados filtrados:", error);
      setFilteredDataCount(0);
    }
  };

  // Função para buscar os dados da API com paginação
  const fetchData = async () => {
    let api = `https://stranger-things-api.fly.dev/api/v1/characters?perPage=${itemsPerPage}&page=${pageNumber}`;

    let query = [];
    if (search) query.push(`name=${search}`);
    if (status) query.push(`status=${status}`);
    if (gender) query.push(`gender=${gender}`);
    if (residence) query.push(`residence=${residence}`);

    if (query.length > 0) api += `&${query.join("&")}`;

    try {
      const response = await fetch(api);
      let data = await response.json();

      // Lógica de filtragem por género
      if (gender) {
        data = data.filter(
          (character) => character.gender.toLowerCase() === gender.toLowerCase()
        );
      }

      // Exceção para filtros "Alive", "Deceased", "Female" e "Male"
      if (status === "Alive" || status === "Deceased" || gender === "Female" || gender === "Male") {
        let totalData = [];
        let page = 1;
        let moreData = true;

        while (moreData) {
          const totalDataResponse = await fetch(`https://stranger-things-api.fly.dev/api/v1/characters?${status ? `status=${status}&` : ""}${gender ? `gender=${gender}&` : ""}perPage=${itemsPerPage}&page=${page}`);
          const totalDataPage = await totalDataResponse.json();
          totalData = totalData.concat(totalDataPage);

          if (totalDataPage.length < itemsPerPage) {
            moreData = false;
          } else {
            page++;
          }
        }

        setFilteredDataCount(totalData.length);
      }

      updateFetchedData(data);
      console.log("Dados Buscados:", data); // Verificação
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      updateFetchedData([]);
    }
  };

  useEffect(() => {
    fetchTotalItems();
  }, [search, status, gender, residence]);

  useEffect(() => {
    fetchData();
  }, [pageNumber, search, status, gender, residence]);

  const totalPages = search || status || gender || residence
    ? calculateTotalPages(filteredDataCount)
    : calculateTotalPages(totalItems);

  console.log("Total de Páginas:", totalPages); // Verificação

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
            setResidence={setResidence}
          />
          <div className="col-8">
            <div className="row">
              <Cards fetchedData={fetchedData} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
