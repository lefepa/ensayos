import React , {useRef} from "react";
import { Contact } from "../models/Contacto.class.js";
import PropTypes  from 'prop-types';

const Contactform = ({add}) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const contectedRef = useRef(true);

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            contectedRef.current.value

          
        );

        add(newContact);
    }
    
    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-.4'>
            <div className='form-outline flex-fill'>
                <input placeholder="name" ref={(nameRef)} id='inputName' type='text' className='form-control form-lg' required autoFocus></input>
                <input placeholder="LastName" ref={(lastNameRef)} id='inputLastName' type='text' className='form-control form-lg' ></input>
                <input placeholder="Email" ref={(emailRef)} id='inputEmail' type='text' className='form-control form-lg' ></input>
                
            </div>  
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>  
        </form>
    );
}

Contactform.propTypes = {

    add: PropTypes.func.isRequired 
}

export default Contactform;
