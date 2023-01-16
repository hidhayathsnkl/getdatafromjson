import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import project1 from "../../images/project/swimmingpooledit.jpg";
import project2 from "../../images/project/wallprofileedit.jpg";
import project3 from "../../images/project/spiderfittingedit.jpg";
import project4 from "../../images/project/slidingdooredit.jpg";
import project5 from "../../images/project/framelessshoweredit.jpg";
import project6 from "../../images/project/foldingdooredit.jpg";

const Project = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <div className="container clientdiv">
            <div class="title"> OUR PROJECTS </div>
            <p class="h2 text-center"> OUR WORKS</p>
          </div>
        </Row>
      </Container>
      <Container fluid className="mt-5">
        <Row>
          <ProjectImage image={project1} />
          <ProjectImage image={project2} />
          <ProjectImage image={project3} />
          <ProjectImage image={project4} />
          <ProjectImage image={project5} />
          <ProjectImage image={project6} />
        </Row>
      </Container>
    </>
  );
};
const ProjectImage = (props) => {
  return (
    <div className="col-sm-12 col-lg-4 imgArea">
      <img className="img-fluid" src={props.image} />
    </div>
  );
};

export default Project;
