import React from 'react';
import Navbar from '../../common/navbar'
import { Container, Row, Col } from 'react-bootstrap';
import Edit from './editFilm'

const EditFilm = () => {
    
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
                            Editar Pelicula
                        </h2>
                        <Edit/>
                    </Col>
                </Row>
                    
            </Container>            
        </React.Fragment>     
    );
};

export default EditFilm;
