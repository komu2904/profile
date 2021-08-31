import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Row,Card } from 'react-bootstrap'

const ProjectScreen = () => {
    return (
        <>
            <h2 align="center" className='text-primary p-3'>Projects</h2>
            <Row>
                <Col md={6} className='mt-3'>
                <Card>
  <Card.Img src="/images/ecommerce.jpg" alt="Card image" fluid />
    <Card.Title className='text-danger text-center'><b>Eccommerce</b></Card.Title>
    <Card.Text align='center'><Link to={{pathname:'https://digitalshopzone.herokuapp.com/'}} target='_blank'><i className='fas fa-link fa-2x'></i></Link></Card.Text>
</Card>
                </Col>
               
               
            </Row>
        </>
    )
}

export default ProjectScreen
