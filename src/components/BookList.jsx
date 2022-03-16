import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import books from "../data/history.json";
import { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import FilteredBooks from "./FilteredBook";

class BookList extends Component {
  state = {
    query: "",
  };

  //   handleChange = (query, value) => {
  //     console.log(this.state.query, value);
  //     this.setState = { query: value };
  //   };

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
              <FilteredBooks query={this.state.query} />
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default BookList;
