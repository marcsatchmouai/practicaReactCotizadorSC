import React, { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';

//import { addNewFilmAction } from '../../../store/actions/filmsActions';

const AddFilm = ({ history }) => {
    // useState Se utiliza para setear los valores en los campos del formulario.
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [anio, setAnio] = useState('');
    const [duracion, setDuracion] = useState('');
    const [director, setDirector] = useState('');
    // Permite utilziar los dispatch.
    const dispatch = useDispatch();

    // Acceder al state del Store! [!IMPORTANTE!]
    const { loading, error } = useSelector((state) => state.films);

    // Llama el action.
    const addNewFilm = (film) => dispatch(addNewFilmAction(film));

    const onSubmit = (e) => {
        e.preventDefault();
        //Validar formulario.
        if (titulo.trim() === '' || genero.trim() === '' || anio.trim() === '' || duracion.trim() === '' || director.trim() === '')
        return;

        //Si no hay errores.
        //Agregar Pelicula.
        const film = {
            titulo,
            genero,
            anio,
            duracion,
            director
        };

        addNewFilm(film);

        // Redireccionar a la lista de peliculas.
        
    };
    return (
        
        <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridTitulo">
                <Form.Label>Titulo</Form.Label>
                <Form.Control 
                    type="text" 
                    value={titulo}
                    placeholder="Titulo" 
                    onChange={(e) => setTitulo(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridGenero">
                <Form.Label>Genero</Form.Label>
                <Form.Select 
                    defaultValue="Choose..." 
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
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
                    value={director}
                    onChange={(e) => setDirector(e.target.value)} 
                    placeholder="" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Año</Form.Label>
                <Form.Control 
                    type="text"
                    value={anio} 
                    onChange={(e) => setAnio(e.target.value)}/>
                </Form.Group>

                

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Duracion</Form.Label>
                <Form.Control 
                    type="time"
                    value={duracion}
                    onChange={(e) => setDuracion(e.target.value)}/>
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

export default AddFilm