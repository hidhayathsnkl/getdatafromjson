import React from "react";
import Catalogpage from "./products/CatalogPage";
import { Container } from "react-bootstrap";

const Catalogues = () => {
  return (
    <>
      <Container>
        <h1 className="text-center py-4"> Catalogues </h1>
        <Catalogpage />
      </Container>
    </>
  );
};

export default Catalogues;
