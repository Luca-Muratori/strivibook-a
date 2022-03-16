import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import books from "../data/history.json";

const BookList = () => {
  return (
    <Container fluid>
      <Row>
        <SingleBook
          books={books}
          objectFit="cover"
          heightImg="50%"
          width="100%"
          height="80%"
        />
      </Row>
    </Container>
  );
};

export default BookList;
