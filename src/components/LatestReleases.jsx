import books from "../data/history.json";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class LatestReleases extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {books.map((book) => (
            <Col className="my-4" lg={3} md={4} sm={6}>
              <img
                key={book.asin}
                className="w-100 h-100"
                alt="book-cover"
                src={book.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestReleases;
