import React from "react";
import { Col } from "react-bootstrap";

function ProductCard(props) {
  return (
    <Col>
      <div className="card">
        <div className="our-card-top p-3">
          <img
            src={
              props.photo
                ? `/uploaded-photos/${props.photo}`
                : "/uploaded-photos/fallback.png"
            }
            className="card-img-top"
          />
        </div>
        <div className="card-body border border-top">
          <h5>{props.name}</h5>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
