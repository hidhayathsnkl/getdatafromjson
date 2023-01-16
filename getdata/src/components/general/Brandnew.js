import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import brand1 from "../../images/newitems/Handle.jpg";
import brand2 from "../../images/newitems/handle2.jpg";
import brand3 from "../../images/newitems/handle3.jpg";
import brand4 from "../../images/newitems/item4.jpg";

const Brandnew = () => {
  return (
    <Container fluid className="mt-4 py-5 bg-light">
      <Container>
        <h3> OUR BRAND NEW PRODUCTS </h3>
        <Row className="py-3 g-3">
          <BrandImage image={brand1} />
          <BrandImage image={brand2} />
          <BrandImage image={brand3} />
          <BrandImage image={brand4} />
        </Row>
        <Row className="d-flex justify-content-center">
          <Col>
            <a href="/products">
              <Button className="btn btn-secondary p-2">
                Click here for other Products
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const BrandImage = (props) => {
  return (
    <Col
      className="justify-content-center p-3 align-items-center d-flex"
      md={3}
      xs={6}
    >
      <img
        className="img-fluid border border-rounded sm-shadow"
        src={props.image}
      />
    </Col>
  );
};

export default Brandnew;
