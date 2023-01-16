import React from "react";
import Container from "react-bootstrap/Container";
import gcc from "../images/solutionimages/gcc.jpg";
import afs55 from "../images/solutionimages/afs-55.jpg";
import afs75 from "../images/solutionimages/afs-75.jpg";
import zms201 from "../images/solutionimages/work-01.jpg";
import zms280 from "../images/solutionimages/zm-280.jpg";
import zm150 from "../images/solutionimages/zm-280.jpg";
import zmco250 from "../images/solutionimages/zmco250.jpg";

import { Col, ListGroup, Row } from "react-bootstrap";

const Solution = () => {
  return (
    <>
      <Container>
        <h2 className="text-center py-3"> OUR SOLUTIONS </h2>
        <Row>
          <SolutionComponent
            image={gcc}
            title="GCC FRAMELESS FOLDING SYSTEM"
            content={[
              "No holes in the glass panel are required for the glass to fit the system",
              "With this system you don't need to install a bottom track or guide. as it requires minimal effort to fold/retract the glass panels via the top track only.",
              "With this system you don't need to install a bottom track or guide. as it requires minimal effort to fold/retract the glass panels via the top track only.",
              "THis system has a modern anodized aluminum profile with a sleek and contemporary hinge system for today's market",
              "Automobile Showroom",
              "Banquet Halls",
              "Convention Centres",
              "Retail and Mall Storefronts",
              "Restaurants and Eateries",
              "Commercial and Domestic room division",
            ]}
          />
        </Row>
        <Row>
          <SolutionComponent
            image={afs55}
            title="AFS- 55 ALUMINUM FOLDING SYSTEM"
            content={[
              "Syetem - AFS 55 Hinged Folding Glass Door System- Railled",
              "Glass Thicknesses - 10-31mm Tempered and Insulated Glasses",
              "Colour opt.for profiles - Natural Anodised - RAL Colours",
              "Colour opt. for acc. - Black",
              "Max. Panel width & Height - 850mm & 3000mm",
            ]}
          />
        </Row>
        <Row>
          <SolutionComponent
            image={afs75}
            title="AFS-75 ALUMINUM FOLDING SYSTEM"
            content={[
              "System - AFS 75 Hinged Folding Glass Door System- Railled",
              "Glass Thicknesses - 10-31mm Tempered and Insulated Glasses",
              "Colour opt.for profiles - Natural Anodised - RAL Colours",
              "Colour opt. for acc. - Black",
              "Max. Panel width & Height - 1000mm & 3200mm",
            ]}
          />
        </Row>
        <Row>
          <SolutionComponent
            image={zms201}
            title="ZM-S-201 MINET SLIDING SYSTEM"
            content={[]}
          />
        </Row>
        <Row>
          <SolutionComponent
            image={zms280}
            title="ZM-280 PEDESTRIAN SLIDING DOOR AUTOMATIONS"
            content={[
              "Two types : Max Capacity - 280Kg, 500Kg",
              "Innovative technical SolutionComponents combined in a strong & high performing door opener",
              "Easy Installation due to the hook system for the pre-assembly of the transom of the wall.",
              "Electronic board with microporcessor, in compliance withe EN16005",
              "standard, providing advanced programing via digital selector",
            ]}
          />
        </Row>
        <Row>
          <SolutionComponent
            image={zm150}
            title="ZM-150 PEDESTRIAN SLIDING DOOR AUTOMATIONS"
            content={[
              "Two types : Max Capacity - 150Kg, 250Kg",
              "Silent Operation with Elegant and Streamline Look.",
              "Autoaligning with anti-derailment built integrated into the main beam.",
              "System without additional wheel",
              "Absence of visible fixing, closing screws",
            ]}
          />
        </Row>
        <Row>
          <SolutionComponent
            image={zmco250}
            title="ZM-250 AUTOMATIC DOOR SERIES"
            content={[
              "Intelligent control by microcomputers and advanced machinery manufacturing.",
              "With intelligent control system, its various parameters can be flexibly adjusted.",
              "With ultra-low noise power unit, it is also simple and convenient to install.",
              "Round shape DC carbon brush motor and reduction gearbox, high torque",
              "With self-locking function, it is safe and reliable, not necessary to fix the electric lock.",
              "Equipped with full-function remote control device.",
            ]}
          />
        </Row>
      </Container>
    </>
  );
};

const SolutionComponent = (props) => {
  const listItems = props.content.map((line) => (
    <ListGroup.Item>{line}</ListGroup.Item>
  ));

  return (
    <>
      <Row>
        <Col xs={12} md={6} className="p-md-5 border-left border-bottom">
          <img className="img-responsive" src={props.image} />
        </Col>
        <Col xs={12} md={6} className="p-5">
          <h2> {props.title} </h2>
          <ListGroup variant="flush">{listItems}</ListGroup>
          <ListGroup.Item>
            <a href="/catalogues">Please see catalog for More Details </a>
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  );
};

export default Solution;
