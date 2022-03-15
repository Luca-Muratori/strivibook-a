import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "./MyNav.css";

const MyNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            id="bookNavbar"
            src="https://i.pinimg.com/736x/49/f7/25/49f725a9f2b62ea80603f3fe51289735--le-design-icon-design.jpg"
          />
          Strivibook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
