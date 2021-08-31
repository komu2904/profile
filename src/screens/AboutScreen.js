import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Row ,Image, ListGroup} from 'react-bootstrap'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skill from '../components/Skill'

const AboutScreen = () => {
    return (
        <>
        <h2 align="center" className='text-primary pt-3'>About Me</h2>
        <Row align="center">
            <Col>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Col>
        </Row>
        <Row className='shadow p-3 m-3 lg-white rounded border'>
            <Col md={3}>
            <Image src='../images/about.jpg' fluid></Image>
            </Col>
            <Col md={8} className='ml-3'>
                <Row>
                    <h1 className='mt-2'>Full-Stact Developer</h1>
                    <Row className='mt-2'>
                        <Col>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Col>
                   </Row>
                    <Row className='mt-2' style={{fontSize:'20px'}}>
                        <Col md={8}>
                            <ListGroup variant='flush'>
                        <ListGroup.Item><b>Birth Day:</b>16-06-1997</ListGroup.Item>
                        <ListGroup.Item><b>Website:</b> <br/><Link style={{textDecoration:'none'}} to={{pathname:'https://ravikumarsrinivasan.herokuapp.com/'}} target='_blank'>www.ravikumar.com</Link></ListGroup.Item>
                        <ListGroup.Item><b>Phone:</b><a style={{textDecoration:'none'}} href="tel:+918883805990">+918883805990</a></ListGroup.Item>
                        <ListGroup.Item><b>City:</b>Tamil Nadu,IN</ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup variant='flush'>
                        <ListGroup.Item><b>Age:</b>23</ListGroup.Item>
                        <ListGroup.Item><b>Degree:</b>BE</ListGroup.Item>
                        <ListGroup.Item><b>Email:</b> <br/><a style={{textDecoration:'none'}} href='mailto:ravi888.rk33@gmail.com'>ravi888.rk33@gmail.com</a></ListGroup.Item>
                        <ListGroup.Item><b>Freelance:</b>Available</ListGroup.Item>
                        </ListGroup>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </Col>
                    </Row>
                </Row>
            </Col>
        </Row>
        <Education />
        <Experience />
        <Skill />

        
        <Row className='shadow p-3 m-3 lg-white rounded border'>
            <h2 align="center">Facts</h2>
            <Row align="center">
                <Col>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </Col>
            </Row>
        </Row>
        </>
    )
}

export default AboutScreen
