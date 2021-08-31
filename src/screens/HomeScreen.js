import React from 'react'
import CenterContainer from '../components/CenterContainer'
import {Card,Col,Row} from 'react-bootstrap'
import Meta from '../components/Meta'

const HomeScreen = () => {
    return (
        <CenterContainer>
          <Meta title='profile' />
           <Card style={{ width: '21rem' }} className='shadow p-3 mt-3 mb-2 lg-white rounded border'>
  <Card.Img variant="top" src='../images/InShot_20210421_193123438.jpg' />
  <Card.Body>
    <Card.Title>Komedhagan</Card.Title>
    <Card.Text>
    A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.
    </Card.Text>
   <Card.Text>
     <Row>
       <Col className='d-flex justify-content-end'>
   <Card.Link href='https://www.facebook.com/profile.php?id=100011417413078' target='_blank'><i className='fab fa-facebook fa-2x'></i></Card.Link>
    <Card.Link href='https://www.instagram.com/ravi_crz_6/' target='_blank' style={{color:'#8a3ab9'}}><i className='fab fa-instagram fa-2x'></i></Card.Link>
    <Card.Link  href='https://twitter.com/ravi_rk33' target='_blank'><i className='fab fa-twitter fa-2x'></i></Card.Link>
    <Card.Link href='https://www.linkedin.com/in/ravi-kumar-4b7348170/' target='_blank'><i className='fab fa-linkedin fa-2x'></i></Card.Link>
    <Card.Link href='https://join.skype.com/invite/a5umhws0wZ5t' target='_blank'><i className='fab fa-skype fa-2x'></i></Card.Link>
    <Card.Link href='https://github.com/Ravi888380' target='_blank' style={{color:'black'}}><i className='fab fa-github fa-2x'></i></Card.Link>
    </Col>
    </Row>
   </Card.Text>
  </Card.Body>
</Card> 
        </CenterContainer>
    )
}

export default HomeScreen
