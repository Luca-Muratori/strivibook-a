import { Col, Card, Button } from "react-bootstrap";

const SingleBook = (prop) => {
  return prop.books.map((book) => (
    <Col className="my-4" lg={3} md={4} sm={6}>
      <Card style={{ width: prop.width }} key={book.asin}>
        <Card.Img
          style={{ height: prop.heightImg, objectFit: prop.objectFit }}
          variant="top"
          src={book.img}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button variant="primary">Selected</Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default SingleBook;
