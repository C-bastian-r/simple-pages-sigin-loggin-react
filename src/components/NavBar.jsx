import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar(){
  return (
  <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{boxShadow:"0.5px 2px 2px"}}>
        <Navbar.Brand href="#home">Pagina de pruebas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/loggin">Loggin</Nav.Link>
            <Nav.Link href="/sigin">Singin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
  </div>
  );
}