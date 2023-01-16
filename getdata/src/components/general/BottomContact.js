import React from "react";
import Container from "react-bootstrap/Container";
import Logo from "../../images/logo/ZMCOLogo.png";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import riyadhOutline from "../../images/Riyadhoutline.jpg";

const BottomContact = () => {
  return (
    <Container
      fluid
      className="contactSection"
      style={{ backgroundImage: `url(${riyadhOutline})` }}
    >
      <Container>
        <Row className="mt-5">
          <Col md={3} xs={6}>
            <img className="p-2 p-md-0 img-fluid" src={Logo} />
          </Col>
          <Col md={3} className="d-md-block d-none">
            <h6 className="text-left"> Company </h6>
            <ListGroup>
              <ListConten src=" " text="Home" />
              <ListConten src=" " text="About Us" />
              <ListConten src=" " text="Products" />
              <ListConten src=" " text="Solutions" />
              <ListConten src=" " text="Contact Us" />
            </ListGroup>
          </Col>
          <Col md={3} className="d-md-block d-none">
            <h6 className="text-left"> Products </h6>
            <ListGroup>
              <ListConten src=" " text="Glass Fittings" />
              <ListConten src=" " text="Door Hardware" />
              <ListConten src=" " text="Automatic Door Systems" />
              <ListConten src=" " text="Digital Locks" />
              <ListConten src=" " text="Customized Railing" />
            </ListGroup>
          </Col>
          <Col md={3} xs={6}>
            <h6 className="text-left"> Contact </h6>
            <ListGroup>
              <ListConten src="" text="Call us at +966 4486677" />
              <ListConten src="" text="Call us at +966 4486689" />
              <ListConten src="" text="Call us at +966 509994659" />
              <ListConten src="" text="mail us at manager@zmcosa.com" />
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const ListConten = (props) => {
  return (
    <ListGroupItem className="border-0 py-1">
      <a className="nav-link border-0 d-flex p-0" href={props.src}>
        {" "}
        {props.text}
      </a>
    </ListGroupItem>
  );
};

export default BottomContact;
