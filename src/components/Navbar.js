import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const NavbarComponent = () => {
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" 
    style={{
         padding: "0px 10px 0px 0px",
    }}>
      <Container>
        <Navbar.Brand href="#home">Header</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
           
        </Nav>
        <Nav>
            <Nav.Link as={NavLink} to="/signup">
                Signup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile">
                Profile
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
                Logout{" "}
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{
        margin: "10px",
   }}></div>
    </>



    // <Navbar
    //   collapseOnSelect
    //   expand="lg"
    //   bg="dark"
    //   variant="dark"
    //   style={{
    //     padding: "10px 80px 10px 50px",
    //   }}
    // >
    //   <Navbar.Brand as={NavLink} to="/">
    //     Header
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="me-auto">
    //       <Nav.Link as={NavLink} to="/">
    //         Header
    //       </Nav.Link>
    //       <Nav.Link as={NavLink} to="/signup">
    //         Signup
    //       </Nav.Link>
    //       <Nav.Link as={NavLink} to="/profile">
    //         profile
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default NavbarComponent;
