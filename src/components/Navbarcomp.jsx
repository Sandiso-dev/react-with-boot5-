import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-light nav">
      <Container fluid>

        <Navbar.Brand href="#" 
        style={{marginRight: "290px"}}>
        <span style={{color:"green"}}>ATG</span>
        W
        <span style={{color:"green"}}>O</span>
        RLD
        </Navbar.Brand>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          <Form className="d-flex" style={{marginRight: "300px"}}>
            <Form.Control

              style={{
                marginTop:"5px",
                borderRadius: "20px",
                background:"lightGray",
                fontWeight:"500", 
                width:"270px",
                height:"35px", 
                fontSize:"13px"}}

                type="search"
                placeholder="Search for your favourite group at ATG"
                className="me-2"
                aria-label="Search"
            />
          </Form>
          
            <p style={{
              fontWeight:"bold", 
              color:"black", 
              marginTop:"10px"}}>
                
              Login/Create account   <span style={{color:"blue"}}>It's Free</span>
            </p>
            <NavDropdown id="navbarScrollingDropdown">
        
              <NavDropdown.Item href="#action4">
                Login 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Create Account
              </NavDropdown.Item>
            </NavDropdown>
    
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;