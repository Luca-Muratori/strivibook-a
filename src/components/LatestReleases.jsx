import books from "../data/history.json";
import { Component } from "react";
import "./LatestReleases.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import SingleBook from "./SingleBook.jsx";

class LatestReleases extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <SingleBook books={books} width="100%" height="100%" />
        </Row>
      </Container>
    );
  }
}

export default LatestReleases;
