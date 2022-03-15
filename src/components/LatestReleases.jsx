import books from "../data/history.json";
import { Component } from "react";
import "./LatestReleases.css";
import { Container, Row, Col } from "react-bootstrap";

class LatestReleases extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {books.map((book) => (
            <Col key={book.asin} className="my-4" lg={3} md={4} sm={6}>
              <img
                className="w-100 h-100 bookCover "
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
