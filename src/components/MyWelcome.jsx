import { Jumbotron, Container } from "react-bootstrap";

const MyWelcome = () => {
  return (
    <Jumbotron>
      <Container fluid>
        <h1>Welcome to Strivibook</h1>
        <h5>
          “In the case of good books, the point is not to see how many of them
          you can get through, but rather how many can get through to you.” -
          Mortimer J. Adler
        </h5>
      </Container>
    </Jumbotron>
  );
};

export default MyWelcome;
