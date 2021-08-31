import React from 'react'
import { Container,Col, Form, Row } from 'react-bootstrap'
import Personal from '../components/Personal'

const AdminScreen =()=>{
    return(
        <Container>
            <Row>
        <Form>
            <Col>
            <Personal />
            </Col>
            <Col>
            </Col>
        </Form>
        </Row>
        </Container>
    )
}
export default AdminScreen