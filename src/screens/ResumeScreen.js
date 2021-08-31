import React from 'react'
import { Col, Row ,Button,Card} from 'react-bootstrap'
import Container from '../components/CenterContainer'

const ResumeScreen = () => {
    const downloadResume =()=>{
        window.location.href='/file/RaviResume.pdf'
    }
    return (
        <Container>
            
            <Row>
                <Col md={6} className='mt-3'>
                <Card  style={{ width: '21rem' }} className='shadow p-3 mt-3 mb-2 lg-white rounded border'>
                    
    <Card.Title className='text-danger text-center'><b>Resume</b></Card.Title>
    <Card.Body>
  <Card.Img src="/images/resume.jpg" alt="Card image" fluid />
    </Card.Body>
    <Card.Footer>
    <Button className='rounded-pill btn-primary d-grid gap-2' onClick={downloadResume} >DOWNLOAD CV</Button>
                
    </Card.Footer>
</Card>
                
                </Col>
            </Row>
            
        </Container>
    )
}

export default ResumeScreen
