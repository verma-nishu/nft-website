import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import metovo from './Images/metovo.png';
import Home from './Home.js';
import Header from './Header';

function NavBar() {
  return (


    <><Header/>

      {/* <Navbar bg="light" expand="lg" class='navbar-padding'>
        <Container >
       
          <div className='metovoimg'>
            <div class='logo-section'> <div><img src={metovo} alt="" class='image-nav'/></div>
            <div class='heading'><span >Metovo</span> </div></div>
           
            
            <div class='toggle'>  <Navbar.Toggle aria-controls="navbarScroll" /></div>
          </div>


          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', margin: 'auto' }}
              navbarScroll
            >
              <NavDropdown title="Explore" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3" >Explore</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about" style={{ textDecoration: 'none' }}>About</Nav.Link>
              <NavDropdown title="Stats" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3">Stats</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Features" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3">Features</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3">Pages</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>

          </Navbar.Collapse>
          <div class='searchbar mb-2 mb-lg-0 me-lg-2'>
            <Form className="d-flex">
              <span class="glyphicon glyphicon-search"></span>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-4"
                aria-label="Search"

              />
              <a class='create-link'>Create</a>
              <Button variant="outline-success sign-button-style" >Sign In</Button>
            </Form>
          </div>

        </Container>
      </Navbar> */}
      <Home />
      </>
  );
}




export default NavBar;