import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardsDetails = () => {
    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, photo, status, gender, residence, affiliation, aliases, born, eyeColor, hairColor, occupation, otherRelations } = fetchedData


    let api = `https://stranger-things-api.fly.dev/api/v1/characters/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    return (
        <div className="container d-flex justify-content-center">
            <div className='d-flex flex-column gap-3'>
                <div className="h1 text-center">{name}</div>
                <div className="text-center">
                    <img src={photo} alt="" className='rounded' style={{ maxWidth: "25rem", maxHeight: "25rem", objectFit: "cover" }} />
                </div>
                {(() => {
                    if (status === "Deceased") {
                        return (
                            <div className="badge bg-danger fs-5"
                            >
                                {status}
                            </div>
                        )
                    }
                    else if (status === "Alive") {
                        return (
                            <div className="badge bg-success fs-5"
                            >
                                {status}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="badge bg-secondary fs-5"
                            >
                                {status}
                            </div>
                        )
                    }
                })()}

                <div className="content">
                    <div className="">
                        <span className="span fw-bold">Gender: </span>
                        {gender}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Eye Color: </span>
                        {eyeColor}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Hair Color: </span>
                        {hairColor}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Residence: </span>
                        {residence}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Born: </span>
                        {born}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Occupation: </span>
                        {occupation}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Affiliation: </span>
                        {affiliation}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Aliases: </span>
                        {aliases}
                    </div>
                    <div className="">
                        <span className="span fw-bold">Other Relations: </span>
                        {otherRelations}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsDetails