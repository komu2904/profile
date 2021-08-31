import React from 'react'
import {Nav,Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
      <header>
      <Navbar bg="dark" collapseOnSelect variant="dark" className="navbar" expand="lg" style={{fontSize:'20px'}} >
        <Container className='p-3'>
      <Navbar.Brand as={Link} to='/'><h4>Komedhagan</h4></Navbar.Brand>
      <Navbar.Toggle aria-controls="header-navbar-nav" />
      <Navbar.Collapse id="header-navbar-nav" className='justify-content-md-center'>
        <Nav className="ml-2">
          <Nav.Link to='/' as={Link} eventKey={'home'}>Home</Nav.Link>
          <Nav.Link to='/about' as={Link} eventKey={'about'}>About me</Nav.Link>
          <Nav.Link to='/project' as={Link} eventKey={'project'}>Project</Nav.Link>
          <Nav.Link to='/resume' as={Link} eventKey={'resume'}>Resume</Nav.Link>
          <Nav.Link to='/contact' as={Link} eventKey={'contact'}>Contact me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
    )
}

export default Header
