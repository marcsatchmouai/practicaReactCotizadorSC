import React from 'react'
import Navbar from '../common/navbar'
import Fondo from '../home/fondo.jpg'

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <img src={Fondo} className="img-fluid w-100" alt="Responsive"/>
                    </Col>
                </Row>
                    
            </Container>            
        </React.Fragment>
    )
}

export default Home

