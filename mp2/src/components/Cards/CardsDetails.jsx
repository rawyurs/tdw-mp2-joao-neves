import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetCharacterByIdQuery } from "../../redux/services/api";
import { setCharacterDetails } from "../../redux/slices/detailsSlice";

const CardsDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { characterDetails } = useSelector((state) => state.details);
  const { data, error, isLoading } = useGetCharacterByIdQuery(id);

  useEffect(() => {
    if (data) {
      dispatch(setCharacterDetails(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const {
    name,
    photo,
    status,
    gender,
    residence,
    affiliation,
    aliases,
    born,
    eyeColor,
    hairColor,
    occupation,
    otherRelations,
  } = characterDetails;

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <div className="h1 text-center">{name}</div>
        <div className="text-center">
          <img
            src={photo}
            alt=""
            className="rounded"
            style={{
              maxWidth: "25rem",
              maxHeight: "25rem",
              objectFit: "cover",
            }}
          />
        </div>
        {(() => {
          if (status === "Deceased") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
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
  );
};

export default CardsDetails;
