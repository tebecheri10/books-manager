import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/">
          <Navbar.Brand href="#home">BOOKIE</Navbar.Brand>
        </Link>

        <Link to="/add-new-book">
          <Button variant="info" size="sm">
            Add New Book
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
