import React from 'react';
import FilterBTN from '../FilterBTN';
import { useDispatch } from 'react-redux';
import { setResidence } from '../../../redux/slices/filtersSlice';

const Residences = () => {
    const dispatch = useDispatch();

    let residences = [
        "Hawkins, Indiana",
        "Indianapolis",
        "Chicago, Illinois",
        "Maple Street",
        "Byers house",
        "New York City",
        "Rookwood Institute",
        "California",
        "Wheeler house",
        "unknown"
    ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Residences
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {residences.map((items, index) => (
                        <FilterBTN task={(value) => dispatch(setResidence(value))} key={index} name="residences" index={index} items={items} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Residences;

