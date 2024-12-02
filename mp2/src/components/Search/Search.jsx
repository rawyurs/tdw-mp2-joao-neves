import React, { useCallback } from "react";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearch, setPageNumber } from "../../redux/slices/filtersSlice";
import { debounce } from "lodash";

const Search = () => {
  const dispatch = useDispatch();

  // Função de debounce definida fora do hook useCallback para evitar dependências desconhecidas
  const debouncedDispatch = debounce((value) => {
    dispatch(setPageNumber(1));
    dispatch(setSearch(value));
  }, 300);

  const handleSearch = useCallback((value) => {
    debouncedDispatch(value);
  }, [debouncedDispatch]);

  const onChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={onChange}
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={`${styles.btn} btn btn-danger fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
