import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from '../../redux/slices/filtersSlice';

const FilterBTN = ({ name, index, items, task }) => {
    const dispatch = useDispatch();
    const { status, gender, residence } = useSelector(state => state.filters);

    const handleClick = () => {
        dispatch(setPageNumber(1));
        task(items);
    };

    const isSelected = () => {
        if (name === 'status' && status === items) return true;
        if (name === 'gender' && gender === items) return true;
        if (name === 'residences' && residence === items) return true;
        return false;
    };

    return (
        <div>
            <style>
                {`
                .x:checked + label, .btn-selected {
                    background-color: #dc3545;
                    color: white;
                }

                input[type="radio"] {
                    display: none;
                }
                `}
            </style>
            <div className="form-check">
                <input
                    onClick={handleClick}
                    className="form-check-input x"
                    type="radio"
                    name={name}
                    id={`${name}-${index}`}
                    checked={isSelected()}
                    onChange={() => { }}
                />
                <label className={`btn btn-outline-danger ${isSelected() ? "btn-selected" : ""}`} htmlFor={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
    );
}

export default FilterBTN;
