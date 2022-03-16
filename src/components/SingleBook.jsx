import { Col, Card, Button } from "react-bootstrap";
import { Component } from "react";
import books from "../data/history.json";
class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return books.map((book) => (
      <Col key={book.asin} className="my-4" lg={3} md={4} sm={6}>
        <Card key={book.asin} onClick={() => this.setState({ selected: true })}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Button variant="primary">Selected</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  }
}

export default SingleBook;
