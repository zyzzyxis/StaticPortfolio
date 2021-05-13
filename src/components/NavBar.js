import { Button, Nav, Navbar } from "react-bootstrap";


const NavBar = () => {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant='dark'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link  href="/about">About</Nav.Link>
          <Nav.Link  href="/projects">Projects</Nav.Link>
        </Nav>
        <Nav>
          <Button position="right"  href="/connect">Let's Connect!</Button>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


export default NavBar