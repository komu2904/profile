import React from 'react'
import { Row ,Container,Col} from 'react-bootstrap'

const CenterContainer = ({children}) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                {children}
                </Col>
            </Row>
            
        </Container>
    )
}

export default CenterContainer
