import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img src="companybar.jpg" width="100" />
          <Navbar.Brand href="#home">¡Company Bar!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <NavDropdown
              title="Bebidas disponibles"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Vinos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Espumantes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Whiskies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Ron</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Gin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Aperitivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Vodka</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Comestibles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Bebidas sin alcohol
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">
              {" "}
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
