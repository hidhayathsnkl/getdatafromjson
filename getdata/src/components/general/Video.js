import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Video = () => {
  return (
    <Container fluid className="mt-4 py-5 shadow-lg">
      <Row>
        <Col>
          <h4 class="text-center pb-4"> Company Profile </h4>
          <Container>
            <iframe
              class="bg-light"
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/Vqc4RUQWcQs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Video;
