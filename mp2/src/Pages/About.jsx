import React from "react";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <h1 className="text-center mb-3 title">About Stranger Things</h1>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">
                Stranger Things an American television series created by the
                Duffer Brothers. First released in 2016 on Netflix, the series
                quickly gained popularity for its blend of horror, science
                fiction, and 80s pop culture.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Plot</h5>
              <p className="card-text">
                The central plot revolves around the disappearance of young Will
                Byers in the fictional town of Hawkins, Indiana, and the efforts
                of his friends, family, and local police to find him. However,
                the mystery quickly deepens as they discover a series of
                supernatural events linked to a young girl with psychic
                abilities known as Eleven.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Cultural Impact</h5>
              <p className="card-text">
                The series is known for its cultural references to the 80s,
                including music, films, and video games from the era, as well as
                an intriguing narrative that blends elements of horror,
                suspense, and friendship. Stranger Things features a talented
                cast, including Winona Ryder, David Harbour, Finn Wolfhard,
                Millie Bobby Brown, Gaten Matarazzo, Caleb McLaughlin, Natalia
                Dyer, Charlie Heaton, and many others.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={img1}
                  className="d-block w-100"
                  alt="Stranger Things 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img2}
                  className="d-block w-100"
                  alt="Stranger Things 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={img3}
                  className="d-block w-100"
                  alt="Stranger Things 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div className="alert alert-light" role="alert">
            <h5>Themes and Reception</h5>
            <p>
              Throughout its seasons, Stranger Things has explored themes such
              as loyalty, loss, courage, and the impact of the supernatural on
              everyday lives. The series has received critical acclaim and
              garnered a large fan base worldwide.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
