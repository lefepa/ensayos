import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contacto.class.js';


 const Contactcomponent = ({contact, conected, remove}) => {

    useEffect(() => {
        console.log("tarea creada")
        return () => {

            console.log("task is going to unmount")
            
        };
    }, [contact]);

    function contactIconConnected () {

        if(contact.conected) {
                return  (<i onClick={()=> conected (contact)}  className="bi-toggle-on task-action"  style={{color:'green'}}></i>) 
            
              }  else {
                  
                 return   (<i onClick={()=> conected (contact)}  className="bi-toggle-off task-action"  style={{color:'grey'}}></i>) 
                  }
        
        }


    return (
        <tr className='fw-normal'>
                <th>
                    <span className='ms-2'>{contact.name}</span>
                </th>

                <td>
                    <span className='align-middle'>{contact.lastName}</span>
                </td>

                <td>
                    <span className='align-middle'>{contact.email}</span>
                </td>
               

                {/* sustituir por un iconos */}
                <td className='align-middle'>
                     
                    {contactIconConnected() }                 

                    {/* <span> {task.completed ? 'Completed' : 'Pending'} </span>   */}
                    <i className="bi-trash task-action" style={{color:'blue'}} onClick={()=> remove(contact)}></i>   
                
                
                </td>


            </tr>

    );
};



        Contactcomponent.propTypes = {
        contact: PropTypes.instanceOf(Contact).isRequired,
        conected: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired
};


export default Contactcomponent
