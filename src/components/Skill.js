import React from 'react'
import {Row,Col,Form,ProgressBar} from 'react-bootstrap'
const Skill = () => {
    return (
        <>
            <Row className='shadow p-3 m-3 lg-white rounded border'>
            <h2 align='center' className='text-dark'>Skills</h2>
            <Row align='center'>
                <Col>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </Col>
            </Row>
            <Col>
                <Form>
                    <Row>
                        <Col md={5} className='mt-3'>
                        <Form.Group>
                        <Form.Label><b>HTML</b></Form.Label>
                <ProgressBar animated now='100' label='100%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>CSS</b></Form.Label>
                <ProgressBar animated now='80' label='80%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>JAVASCRIPT</b></Form.Label>
                <ProgressBar animated now='90' label='90%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>BOOTSTRAP</b></Form.Label>
                <ProgressBar animated now='95' label='95%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>REACT JS</b></Form.Label>
                <ProgressBar animated now='100' label='100%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>C#</b></Form.Label>
                <ProgressBar animated now='60' label='60%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>NODE JS</b></Form.Label>
                <ProgressBar animated now='75' label='75%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>MONGODB & MSSQL</b></Form.Label>
                <ProgressBar animated now='80' label='80%' />
                </Form.Group>
                </Col>
                <Col md={5} className='mt-3'>
                <Form.Group>
                        <Form.Label><b>Express & Redux</b></Form.Label>
                <ProgressBar animated now='85' label='85%' />
                </Form.Group>
                </Col>
                </Row>
                
                </Form>
            
            </Col>
        </Row>
        </>
    )
}

export default Skill
