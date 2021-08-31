import React from 'react'
import {Row,Col, Form,Button} from 'react-bootstrap'
import Meta from '../components/Meta'
const ContactScreen = () => {
    return (
        <>
        <Meta title='contact' />
        <Row className='justify-content-md-center'>
        
            <h2 align="center" className='text-primary pt-4'>Contact</h2>
            
        </Row>
        <Row className='justify-content-md-between'>
        <Col md={3} className='shadow p-2 mb-2 lg-white rounded mt-3 text-center border'>
                <h2>Address</h2>
            <address>
                <i>
                Ravikumar Srinivasan <br />
                1/70,16Pudur,
                16 Pudur(po),
                Oddanchatram(Tk),
                Dindigul (Dt), <br />
                Tamil nadu(state),
                India.<br />
                624614
                </i>
            </address>
            <a href='tel:+918883805990' style={{textDecoration:'none'}}><h4><i className='fas fa-phone'></i>{' '}+918883805990</h4></a>
                <a href='mailto:ravi888.rk33@gmail.com' style={{textDecoration:'none'}}><h5><i className='fas fa-envelope'></i>{' '}ravi888.rk33@gmail.com</h5></a>
            
            </Col>
            <Col md={4} className='shadow p-2 mb-2 lg-white mt-3 rounded border'>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter the name'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter the email'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Enter the your message'></Form.Control>
                </Form.Group>
                <Button variant='primary' className='float-right mt-3'>Submit</Button>
            </Form>
            </Col>
            <Col md={4} className='shadow p-2 mb-2 lg-white rounded mt-3 border'>
            <iframe title='Ravikumar' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.6717625854625!2d77.6690054281358!3d10.525296270846463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9e5c5c111f401%3A0xa89ab955e18290db!2sPost%20Office!5e0!3m2!1sen!2sin!4v1621404571954!5m2!1sen!2sin" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%"></iframe>
            </Col>
          
            
        </Row>
        </>
    )
}

export default ContactScreen
