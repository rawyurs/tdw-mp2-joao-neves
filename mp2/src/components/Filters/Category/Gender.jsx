import React from 'react'
import FilterBTN from '../FilterBTN'
import { useDispatch } from 'react-redux';
import { setGender } from '../../../redux/slices/filtersSlice';

const Gender = () => {
    const dispatch = useDispatch();
    let genders = ["Female", "Male", "Unknown"];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Gender
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {genders.map((items, index) => (
                        <FilterBTN task={(value) => dispatch(setGender(value))} key={index} name="gender" index={index} items={items} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gender;
