import React from 'react';
import ComponenteB from './componenteB';
import { Contact } from '../models/Contacto';

const Lista = () => {

    const defaultContact = new Contact("Lenin", "Patiño", "ingeleninfernando@gamil.com", true)
    return (
        <div>
            <ComponenteB contact={defaultContact} />
        </div>
    );
}

export default Lista;
