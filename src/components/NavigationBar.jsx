import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavigatonBar = () =>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">FirstCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/about"}>
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/contact"}>
                <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/LoginDoctor"}>
                <Nav.Link>Login Doctor</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/LoginDoctor"}>
                <Nav.Link>Login Patient</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    ); 
}

export default NavigatonBar;