import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import books from "../data/history.json";
import { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class BookList extends Component {
  state = {
    query: "",
  };

  render() {
    console.log(this.state.query);
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
        </InputGroup>
        {this.state.query === "" ? (
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
        ) : (
          <Container fluid>
            <Row>
              {books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.query.toLowerCase())
                )
                .map((b) => (
                  <SingleBook
                    books={b}
                    objectFit="cover"
                    heightImg="50%"
                    width="100%"
                    height="80%"
                  />
                ))}
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default BookList;
