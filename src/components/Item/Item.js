import react from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" className="" src={info.imagen} />
              <Card.Body>
                <Card.Title>{info.nombre}</Card.Title>
                <Card.Text>{info.description}</Card.Text>
                <Card.Text>{info.precio}</Card.Text>
                <Button variant="dark">
                  {" "}
                  <Link to={`/detalle/${info.id}`}>Ver Detalles</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Item;
