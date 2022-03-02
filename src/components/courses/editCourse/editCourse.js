import React, { useState, useEffect } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { editFilmAction } from '../../../store/actions/filmsActions';

const EditFilmForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);
    const [filmState, setFilm] = useState({
        titulo: '',
        genero: '',
        anio: '',
        duracion: '',
        director: ''
    });

    const { loading, error, film } = useSelector((state) => state.films);

    useEffect(() => {
        setFilm(film);
    }, [film]);

    const { titulo, genero, anio, duracion, director } = filmState;

    const editFilm = (film) => dispatch(editFilmAction(film));
    
    const onFormChange = (e) => {
        setFilm({
        ...filmState,
        [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        editFilm(filmState);
        setValidated(true);
        history.push(`/filmList`);
    };

    return (
        <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridTitulo">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control 
                        type="text"
                        name='titulo' 
                        value={titulo}
                        placeholder="Titulo" 
                        onChange={onFormChange} required/>
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese un Titulo.
                    </Form.Control.Feedback>
                <Form.Group as={Col} controlId="formGridGenero">
                    <Form.Label>Genero</Form.Label>
                    <Form.Select
                        name='genero'  
                        value={genero}
                        onChange={onFormChange}
                        >
                        <option>Seleccione...</option>
                        <option>Drama</option>
                        <option>Accion</option>
                        <option>Comedia</option>
                        <option>Terror</option>
                        <option>Aventuras</option>
                        <option>Ciencia Ficion</option>
                        <option>Musical</option>
                        <option>Documental</option>
                        <option>Infantil</option>
                        <option>Musical</option>

                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Director</Form.Label>
                <Form.Control 
                    type="text"
                    name='director' 
                    value={director}
                    onChange={onFormChange} 
                    placeholder="" required/>
                <Form.Control.Feedback type="invalid">
                    Por favor ingrese un Director.
                </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Año</Form.Label>
                    <Form.Control 
                        type="text"
                        name='anio' 
                        value={anio} 
                        onChange={onFormChange} required/>
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese un Año.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Duracion</Form.Label>
                    <Form.Control 
                        type="time"
                        name='duracion' 
                        value={duracion}
                        onChange={onFormChange} required/>
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese una Duracion.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Guardar
            </Button>
            {loading ? <p> Loading... </p> : null}

            {error ? (
            <p className='alert alert-danger p-2 m-4 text-center'>
                Ocurrio un error.
            </p>
            ) : null}
        </Form>
    )
}

export default EditFilmForm