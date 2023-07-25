import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { NavLink as NavLinkReact } from "react-router-dom";
import NavLink from "react-bootstrap/esm/NavLink";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img src="companybar.jpg" width="100" />
          <Navbar.Brand href="/">¡Company Bar!</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink>
              {" "}
              <NavLinkReact to="/">Home</NavLinkReact>
            </NavLink>
            <NavLink>
              {" "}
              <NavLinkReact to="/categoria/cerveza">Ofertas</NavLinkReact>
            </NavLink>
            <NavDropdown
              title="Bebidas disponibles"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/vino">Vinos</NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/cerveza">Cervezas</NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/espumante">
                  Espumantes
                </NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/whisky">Whiskies</NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/ron">Ron</NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/gin">Gin</NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/aperitivo">
                  Aperitivos
                </NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/vodka">Vokda</NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/snack">Comestibles</NavLinkReact>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {" "}
                <NavLinkReact to="/categoria/gaseosa">
                  Bebidas sin alcohol
                </NavLinkReact>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLinkReact to="/cart">
              {" "}
              <CartWidget />
            </NavLinkReact>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
