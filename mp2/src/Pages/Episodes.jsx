import React, { useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { useGetCharactersByEpisodeQuery } from "../redux/services/api";
import {
  setCharactersByEpisode,
  setEpisodeId,
} from "../redux/slices/episodesSlice";

const Episodes = () => {
  const dispatch = useDispatch();
  const { id, characters } = useSelector((state) => state.episodes);
  const { data, error, isLoading } = useGetCharactersByEpisodeQuery(id);

  useEffect(() => {
    if (data) {
      dispatch(setCharactersByEpisode(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Characters in Episode - <span className="text-danger">{id}</span>
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <div className="text-center mb-4">
            <h4 className="text-center mb-4">Pick Episodes</h4>
            <InputGroup
              setID={(newID) => dispatch(setEpisodeId(newID))}
              name="Episode"
              total={25}
            />
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
