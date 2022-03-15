import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>Contact Us</Col>
        <Col lg={4}>Terms And Conditions</Col>
        <Col lg={4}>Our Dream</Col>
        <Col lg={4}>Work With Us</Col>
        <Col lg={4}>Sell Your Books</Col>
        <Col lg={4}>FAQ</Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
