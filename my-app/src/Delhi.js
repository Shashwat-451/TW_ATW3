import React, { useEffect } from 'react'
import HomeLower from './HomeLower'
import Menu from './Menu'
import AOS from 'aos';
import websitelogo from './imagesvid/websitelogo.png'
import './Goa.css'
import 'aos/dist/aos.css'; 
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Menu.css'
import { Link } from "react-router-dom";
import BookingForm from './BookingForm';

const Delhi = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <div>
   
   <Navbar className="hell p-0 m-0" bg="black"  fixed="top" expand="lg" variant="dark">
        <Container>
                 <Navbar.Brand ><img src={websitelogo} alt="img" height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand className=" p-3 log text-white" href="#home">PARADISE INN</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ">
              <Nav.Link className="helll  active" as={Link} to="/">Home</Nav.Link>

              <NavDropdown className=" helll" title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/mumbai">Mumbai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chennai">Chennai</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/delhi">Delhi</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/kolkata">Kolkata</NavDropdown.Item>
                <NavDropdown.Item  as={Link} to="/Goa">Goa</NavDropdown.Item>
                {/* <NavDropdown.Dvider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}

              </NavDropdown>
              <Nav.Link className="helll" as={Link} to="/rooms">Rooms</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/services">Restaurant</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/explore">Explore</Nav.Link>
              <Nav.Link className="helll " as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link className="helll" as={Link} to="/contact">Contact Us</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
 
          <div className="text-center tobut">
            <button style={{paddingLeft:"12px",fontSize:"20px",paddingRight:"12px",paddingTop:"6px",paddingBottom:"6px",marginBottom:"10px"}} className='btn56' >Book Now !</button>
            </div>
        </Container>
       
      </Navbar>





      
      <div className="outer_div2">
        <img src="https://wallpaperaccess.com/full/118078.jpg" />

        <div className="content d-flex align-items-center">
        <div className="container text-center">
            <h1>PARADISE INN </h1>
            <h2 className="text-center mb-4 mt-3">DELHI</h2>
            <h3>Experience the capital city like never before</h3>
            <BookingForm/>
          </div>
        </div>
      </div>



   

<HomeLower/>


    </div>
  )
}

export default Delhi
