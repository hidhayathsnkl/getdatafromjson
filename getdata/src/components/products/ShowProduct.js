import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ShowProduct = (props) => {
  const [activeCollection, setActiveCollection] = useState("Patch Fittings");
  const [collectionNo, setCollectionNo] = useState(0);
  const [pageCount, setPageCount] = useState();
  const [skipCount, setSkipCount] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let activeColName = activeCollection;
    let no = collectionNo;
    let skip = skipCount * 8;

    $.getJSON("products.json", function(data) {
      setProduct(data[no][activeColName].slice(skip, skip + 8));
      setPageCount(Math.ceil(data[no][activeColName].length / 8));
    });
  }, [activeCollection, pageCount, skipCount]);

  if (props.select !== activeCollection) {
    setActiveCollection(props.select);
    setCollectionNo(props.number);
    setSkipCount(0);
  }
  function handlePrev() {
    setSkipCount((prev) => Number(prev - 1));
  }
  function handleNext() {
    setSkipCount((prev) => Number(prev + 1));
  }
  function handleSkip(value) {
    setSkipCount(value);
  }
  const handleShow = () => {
    var showDiv = document.getElementById("headingbar");
    showDiv.classList.toggle("show");
  };

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1 className="px-2"> {props.select} </h1>
        <button
          id="controlButton"
          className="btn btn-light mx-3"
          onClick={handleShow}
        >
          Change Catagory
        </button>
      </div>
      <Row className="product-grid">
        {product.map((pro) => (
          <ProductCard
            key={pro._id.$oid}
            prodId={pro._id}
            name={pro.name}
            photo={pro.photo}
          />
        ))}
      </Row>
      <Container className="text-center p-3">
        <Button
          variant="light"
          className="mx-2"
          disabled={skipCount === 0}
          onClick={handlePrev}
        >
          Prev
        </Button>

        <PaginationCreate pageCount={pageCount} setSkip={handleSkip} />

        <Button
          variant="light"
          className="mx-2"
          disabled={skipCount + 1 === pageCount}
          onClick={handleNext}
        >
          Next
        </Button>
      </Container>
    </Container>
  );
};

const PaginationCreate = (props) => {
  const paginationButtons = [];
  for (let i = 1; i < props.pageCount + 1; ++i) {
    paginationButtons.push(
      <Button
        variant="light"
        className="mx-2"
        value={i}
        key={i}
        onClick={(e) => {
          props.setSkip(i - 1);
        }}
      >
        {i}
      </Button>
    );
  }
  return paginationButtons;
};

export default ShowProduct;
