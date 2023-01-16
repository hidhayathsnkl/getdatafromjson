import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avio from "../../../src/images/dealerlogo/avio.png";
import dorma from "../../../src/images/dealerlogo/dorma.png";
import gaso from "../../../src/images/dealerlogo/gaso.png";
import gcc from "../../../src/images/dealerlogo/gcc.png";
import mab from "../../../src/images/dealerlogo/mab.png";
import sms from "../../../src/images/dealerlogo/sms.png";
import veto from "../../../src/images/dealerlogo/veto.png";
import zmco from "../../../src/images/dealerlogo/zmco.png";

const DealerLogo = () => {
  return (
    <>
      <Container>
        <h4> </h4>
        <Row className="g-3">
          <BrandImage image={zmco} />
          <BrandImage image={dorma} />
          <BrandImage image={gaso} />
          <BrandImage image={gcc} />
        </Row>
        <Row className="g-3">
          <BrandImage image={mab} />
          <BrandImage image={sms} />
          <BrandImage image={veto} />
          <BrandImage image={avio} />
        </Row>
      </Container>
    </>
  );
};

const BrandImage = (props) => {
  return (
    <Col
      xs={4}
      className="justify-content-center p-md-2 align-items-center d-flex"
      md={3}
      sm={6}
    >
      <img className="p-md-5 img-fluid  sm-shadow" src={props.image} />
    </Col>
  );
};
export default DealerLogo;
