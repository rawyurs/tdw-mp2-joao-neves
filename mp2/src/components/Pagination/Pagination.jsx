import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../../redux/slices/filtersSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageNumber, totalPages, filteredDataCount } = useSelector(
    (state) => state.filters,
  );

  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style>
        {`
                @media (max-width: 768px){
                    .next, .prev{
                    display:none;
                    }
                    .pagination{
                    font-size: 14px;
                    }
                }
                `}
      </style>
      <ReactPaginate
        className={`pagination justify-content-center gap-4 my-4 ${styles.pagination}`}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Previous"
        nextLabel="Next"
        nextClassName="btn btn-danger next"
        previousClassName="btn btn-danger prev"
        pageClassName="page-item"
        pageLinkClassName="page-link text-danger"
        activeLinkClassName="text-white bg-danger border-danger"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data) => {
          dispatch(setPageNumber(data.selected + 1));
        }}
        pageCount={totalPages}
      />
    </>
  );
};

export default Pagination;
