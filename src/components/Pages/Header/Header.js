import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';




const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const activeStyle ={
        // backgroundColor : 'red',
        textDecuration : 'urderline',
        color : 'rgb(145, 86, 3)',
        fontWeight : 'bold',
        fontSize: '15px !important',
        
        borderRadius : '50px'
       
      }
    
      
    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#"><b className='text-success'>KHACHABAZAR</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
           
            navbarScroll
          >
            <NavLink
             className="link"
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Shop
          </NavLink>
            <NavLink
             className="link"
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About us
          </NavLink>
            
         
          
          
          
          <button className='Cart-btn' variant="primary" onClick={handleShow}>
        

      </button>
      <NavLink
             className="link"
            to="/login"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Login
          </NavLink>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
        </div>
    );
};

export default Header;


{/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div> */}