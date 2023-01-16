import React, { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShowProduct from "./ShowProduct";

const UorderList = () => {
  const [options, setOptions] = useState([]);
  const [select, setSelect] = useState("Patch Fittings");
  const [no, setNo] = useState(0);

  useEffect(() => {
    $.getJSON("data.json", function(value) {
      setOptions(value.collections);
    });
  });

  const handleSelect = (e) => {
    classRemove();
    setSelect(e.target.value);
    switchState(e.target.value);
    e.target.className = "btn text-left bg-dark text-white";
  };

  const switchState = (e) => {
    switch (e) {
      case "Patch Fittings":
        setNo(0);
        break;
      case "Handle Series":
        setNo(1);
        break;
      case "Spider Fittings":
        setNo(2);
        break;
      case "Hinges Series":
        setNo(3);
        break;
      case "Fixed Panel Clamps and Fittings":
        setNo(4);
        break;
      case "PVC Seals, Magnet Weather Stripes":
        setNo(5);
        break;
      case "Knobs Series":
        setNo(6);
        break;
      case "Shower Acc and Adj Single Point Fix":
        setNo(7);
        break;
      case "Sliding Rollers, Rails, Standoff":
        setNo(8);
        break;
      case "Floor Hinge Series":
        setNo(9);
        break;
      case "Glass Fitting Accessories":
        setNo(10);
        break;
    }
  };

  const classRemove = () => {
    $("button").addClass("btn btn-light");
    $("button").removeClass("bg-dark text-white");
  };
  return (
    <>
      <React.StrictMode>
        <Container>
          <Row>
            <Col xs={2} id="headingbar">
              <ListGroup>
                {options.map((val, index) => (
                  <Button
                    className="text-left"
                    variant="light"
                    key={index}
                    count={val.id}
                    value={val.name}
                    onClick={handleSelect}
                  >
                    {val.name}
                  </Button>
                ))}
              </ListGroup>
            </Col>
            <Col md={10} xs={12}>
              <ShowProduct select={select} number={no} />
            </Col>
          </Row>
        </Container>
      </React.StrictMode>
    </>
  );
};

export default UorderList;
