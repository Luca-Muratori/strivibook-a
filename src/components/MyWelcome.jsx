import { Jumbotron, Container } from "react-bootstrap";

const MyWelcome = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome to Strivibook</h1>
        <p>
          “In the case of good books, the point is not to see how many of them
          you can get through, but rather how many can get through to you.” -
          Mortimer J. Adler
        </p>
      </Container>
    </Jumbotron>
  );
};

export default MyWelcome;
