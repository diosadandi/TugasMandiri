import {Container, Nav, Navbar } from "react-bootstrap";



const LibComponentNavbar = () => {


  return (
    <Navbar expand="lg"  bg="primary" >
      <Container>
        <Navbar.Brand href="#">Tugas Mandiri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/">Tugas 2</Nav.Link>
              <Nav.Link href="#/Tugas1">Tugas 1</Nav.Link>
              <Nav.Link href="#/Tugas3">Tugas 3</Nav.Link>
              <Nav.Link href="#/Tugas4">Tugas 4</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default LibComponentNavbar;