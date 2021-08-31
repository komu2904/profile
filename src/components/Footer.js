import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-dark' style={{color:'white'}}>
            <Container className='p-2'>
                <Row>
                    <Col>
                    <h2>Ravikumar Srinivasan</h2>
                    </Col>
                    <Col>
                    <ul className='d-flex justify-content-around' style={{listStyleType:'none'}}>
                        <Link to='/' style={{textDecoration:'none'}} className='mr-2'>Home</Link>
                        <Link to='/about' style={{textDecoration:'none'}} className='mr-2'>About Me</Link>
                        <Link to='/project' style={{textDecoration:'none'}} className='mr-2'>Poject</Link>
                        <Link to='/resume' style={{textDecoration:'none'}} className='mr-2'>Resume</Link>
                        <Link to='/contact' style={{textDecoration:'none'}} className='mr-2'>Contact Me</Link>
                    </ul>
                    </Col>
                    <Col>
                    <ul className='d-flex justify-content-around' style={{listStyleType:'none',display:''}}>
                        <Link to={{pathname:'https://www.facebook.com/profile.php?id=100011417413078'}} target='_blank'><i className='fab fa-facebook fa-2x'></i></Link>
                        <Link to={{pathname:'https://www.instagram.com/ravi_crz_6/'}} target='_blank' style={{color:'#8a3ab9'}}><i className='fab fa-instagram fa-2x'></i></Link>
                        <Link to={{pathname:'https://wa.me/+918883805990/?text=Hi'}} target='_blank' style={{color:'green'}}><i className='fab fa-whatsapp fa-2x'></i></Link>
                        <Link to={{pathname:'https://www.linkedin.com/in/ravi-kumar-4b7348170/'}} target='_blank'><i className='fab fa-linkedin fa-2x'></i></Link>
                        <Link to={{pathname:'https://twitter.com/ravi_rk33'}} target='_blank'><i className='fab fa-twitter fa-2x'></i></Link>
                        <Link to={{pathname:'https://join.skype.com/invite/a5umhws0wZ5t'}} target='_blank'><i className='fab fa-skype fa-2x'></i></Link>
                        <Link to={{pathname:'https://github.com/Ravi888380'}} target='_blank' style={{color:'gray'}}><i className='fab fa-github fa-2x'></i></Link>
    
                    </ul>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xs={6} md={3}>Copy rights &copy;<Link to='/' className='mr-2'>Ravi</Link></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
