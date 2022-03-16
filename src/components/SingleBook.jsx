import { Col, Card, Button } from "react-bootstrap";
import { Component } from "react";
import books from "../data/history.json";

const SingleBook = (props) => {
  return props.books.map((book) => (
    <Col key={book.asin} className="my-4" lg={3} md={4} sm={6}>
      <Card
      // onClick={() => this.setState({ selected: !this.state.selected })}
      // style={{ border: this.state.selected ? "5px solid green" : "none" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button
            onClick={() => this.setState({ selected: true })}
            variant="primary"
          >
            Selected
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default SingleBook;
