import React from 'react'
//import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'


const List = ({ course }) => {
    const { _id, titulo, genero, anio, duracion, director } = course;

    //const history = useHistory(); // Habilitar history para redireccionar.

    const onDeleteCourse = (id) => {
        // preguntar al usuario
        Swal.fire({
          title: '¿Estas seguro?',
          text: 'Esta accion es irreversible.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.value) {
          }
        });
    };

    

    return (
        <tr>
            <td>{titulo}</td>
            <td>{genero}</td>
            <td>{anio}</td>
            <td>{duracion}</td>
            <td>{director}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        
                    >
                        Editar
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        
                    >
                        Eliminar
                    </button>
                </div>              
            </td>
        </tr>
    )
}

export default List