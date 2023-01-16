import React from "react";
import CompanyInfo from "./aboutus/CompanyInfo";
import Container from "react-bootstrap/Container";
import DealerLogo from "./aboutus/DealerLogo";

const About = () => {
  return (
    <>
      <Container>
        <h1 className="text-center p-4"> About Us</h1>
        <CompanyInfo />
        <DealerLogo />
      </Container>
    </>
  );
};

export default About;
