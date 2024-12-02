import React from "react";
import Gender from "./Category/Gender";
import Status from "./Category/Status";
import Residences from "./Category/Residences";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../redux/slices/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-danger text-decoration-underline mb-4"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status />
        <Residences />
        <Gender />
      </div>
    </div>
  );
};

export default Filters;
