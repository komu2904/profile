import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'

const Personal = () => {
    return (
        <>
           <h2 className='text-center'>Profile</h2>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Name</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter name' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Email</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter email' type='email'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Contact Number</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter mobile number' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Address</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter address' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>City/State</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter city and state' required='true' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Facebook</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter url' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Instagram</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter url' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Github</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter url' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Twitter</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter url' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Linkedin</Form.Label>
                <Col sm={10}>
                <Form.Control placeholder='please enter url' type='text'></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Skype</Form.Label>
                <Col sm={10}>
                <Form.Control type='text' placeholder='please enter url'></Form.Control>
                </Col>
            </Form.Group>
            <Button variant='primary'>Submit</Button> 
        </>
    )
}

export default Personal
