import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Education = () => {
    return (
        <>
            <Row className='shadow p-4 mt-3 lg-white rounded border'>
                <Col align='center' md={4}>
                <h2 className='text-primary'>2020-Present</h2>
                <h3>Full-Stact Developer</h3>
                <h5 className='text-secondary'>Freelancer</h5>
                <h5 className='text-secondary'>Chennai</h5>
                </Col>
                <Col md={6}>
                    <Row>
                        I'm a paragraph.Click here to add your own text ad edit me. It's easy.Just click "Edit Text" or Double click me to add your own content and make changes to the font. 
                    </Row>
                    <Row>
                        I'm a great place for you to tell a story and let your users know
                    </Row>
                </Col>
            </Row>
            <Row className='justify-content-around mt-3'>
                <Col md={4}><h3>Education</h3></Col>
                <Col md={4}></Col>
                 </Row>
            <Row className='shadow p-4 mt-3 lg-white rounded border'>
                <Col align='center' md={4}>
                <h2 className='text-primary'>2019-2020</h2>
                <h3>Full-Stact Developer</h3>
                <h5 className='text-secondary'>Sykasys Technologies pvt</h5>
                <h5 className='text-secondary'>Chennai</h5>
                </Col>
                <Col md={6}>
                    <Row>
                        I'm a paragraph.Click here to add your own text ad edit me. It's easy.Just click "Edit Text" or Double click me to add your own content and make changes to the font. 
                    </Row>
                    <Row>
                        I'm a great place for you to tell a story and let your users know
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Education
