import React from 'react'
import Gender from './Category/Gender';
import Status from './Category/Status';
import Residences from './Category/Residences';


const Filters = ({ setStatus, setPageNumber, setGender, setResidence }) => {

    let clear = () => {
        window.location.reload(false);
    }
    return (
        <div className='col-3'>
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div
                onClick={clear}
                style={{ cursor: "pointer" }} className="text-center text-danger text-decoration-underline mb-4">
                Clear Filters
            </div>


            <div className="accordion" id="accordionExample">
                <Status setPageNumber={setPageNumber} setStatus={setStatus} />
                <Residences setPageNumber={setPageNumber} setResidence={setResidence} />
                <Gender setGender={setGender} setPageNumber={setPageNumber} />
            </div>

        </div>
    )
}

export default Filters;