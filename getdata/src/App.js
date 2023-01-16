import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Catalogues from "./components/Catalogues";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Solution from "./components/Solution";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo1 from "./images/logo/ZMCOLogo.png";
import BottomContact from "./components/general/BottomContact";
import Icons from "./components/general/icons";
import Social from "./components/general/SocialMedia";

const App = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 shadow-sm"
        >
          <Container>
            <Navbar.Brand href="#" className="px-4">
              <img className="img-fluid" src={logo1} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ZMCO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1 px-md-5">
                  <Nav.Item eventkey={1} href="/">
                    <Nav.Link as={Link} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item eventkey={1} href="/aboutus">
                    <Nav.Link as={Link} to="/aboutus">
                      Aboutus
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item eventkey={2} href="/products">
                    <Nav.Link as={Link} to="/products">
                      Products
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item eventkey={3} href="/catalogues">
                    <Nav.Link as={Link} to="/catalogues">
                      Catalogues
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item eventkey={4} href="/solutions">
                    <Nav.Link as={Link} to="/solutions">
                      Solutions
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item eventkey={5} href="/contact">
                    <Nav.Link as={Link} to="/contact">
                      contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/catalogues" element={<Catalogues />}></Route>
        <Route path="/solutions" element={<Solution />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Social />
      <Icons />
      <BottomContact />
    </>
  );
};

export default App;
