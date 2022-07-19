import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contacto';


const ComponenteB = ({contact}) => {
    return (
        <div>
            <h1>
                Nombre: {contact.nombre}
            </h1>

            <h1>
                Apellid:{contact.apellido}
            </h1>

            <h1>
                 Email: {contact.email}
            </h1>

            <h1>
                Contactado {contact.conectado ? "EN LINEA": "NO DISPONIBLE"}
            </h1>
            
        </div>
    );
};


ComponenteB.propTypes = {
 contact:PropTypes.instanceOf(Contact)
};


export default ComponenteB;
