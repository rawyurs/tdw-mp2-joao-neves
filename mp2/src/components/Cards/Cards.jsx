import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ fetchedData, page }) => {
  let display;

  if (fetchedData && fetchedData.length > 0) {
    display = fetchedData.map((x) => {
      let { _id, name, photo, status, portrayedBy } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${_id}`}
          key={_id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${styles.cards} d-flex flex-column`}>
            <img src={photo} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Portrayed By</div>
              <div className="fs-5">{portrayedBy}</div>
            </div>
          </div>
          {(() => {
            if (status === "Deceased") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = <div className="text-center fs-4">No Characters Found</div>;
  }

  return <>{display}</>;
};

export default Cards;
