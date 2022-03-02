import React from 'react'
import Navbar from '../../common/navbar'
import Add from './addFilm'

import { Container, Row, Col } from 'react-bootstrap';

const AddFilmForm = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar/>
                    </Col>
                </Row>
                <br/>
                <Row className="justify-content-md-center p-5">
                    <Col>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nueva Pelicula
                        </h2>
                        <Add/>
                    </Col>
                </Row>
                    
            </Container>            
        </React.Fragment>
    )
}

export default AddFilmForm

