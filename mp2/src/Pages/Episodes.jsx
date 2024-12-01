import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
    let [characters, setCharacters] = useState([]);
    let [id, setID] = useState(1);

    let api = `https://stranger-things-api.fly.dev/api/v1/characters?appearsInEpisodes=${id}`;

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(api);
                const data = await response.json();
                setCharacters(data);
            } catch (error) {
                console.error("Failed to fetch characters:", error);
            }
        };

        fetchCharacters();
    }, [api]);

    return (
        <div className="container">
            <div className="row mb-3">
                <h1 className="text-center mb-3">Episode - <span className="text-danger">{id}</span></h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-4">
                    <div className="text-center mb-4">
                        <h4 className="text-center mb-4">Pick Episodes</h4>
                        <InputGroup setID={setID} name="Episode" total={25} />
                    </div>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/episode/" fetchedData={characters} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Episodes;
