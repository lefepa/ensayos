import React, {useState} from 'react';
import { Contact } from '../models/Contacto.class.js';
import Contactform from '../form/formContact';
import  Contactcomponent  from './contact.jsx';

const ContactListComponent = () => {

    const contact1 = new Contact("Lenin", "Patiño",   "ingeleninfernando@gamil.com", false);
    const contact2 = new Contact("Lenin", "Patiño",   "ingeleninfernando@gamil.com", false);
    
    const [contacts, setContacts] = useState([contact1, contact2]);
    const [loading, setloading] = useState(false);
    
    
    function conectedContact (contact) {

        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].conected= !tempContact[index].conected;
        // we update the state of the comopnent and it will
        // update the interaction of the tasks in order to
        //show the task update

        setContacts(tempContact);

    }

    function deleteContact() {

        const index = contacts.indexOf(Contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
               
    }


    function addContact(contact) {

        console.log('delete this task', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);

    }
    
    return (
        <div style={{backgroundColor: 'white'}}>
        <div className='col-12'>
            <div classame='card'>
                
                <div className='card-header p-3'>
                    <h5>YOUR CONTACTS:</h5>

                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                    
                    <table>
                        <thead>
                                <tr>
                                    <th scopr='col'> Name </th>     
                                    <th scopr='col'> LastName </th>  
                                    <th scopr='col'> Name </th>
                                    <th scopr='col'> Connected </th>                            
                                </tr>
                            
                        </thead>

                        <tbody>

                        {
                            contacts.map((contact, index) => {

                                return (

                                    <Contactcomponent 
                                    key={index}
                                    contact={contact}
                                    conected={conectedContact}
                                    remove={deleteContact}   
                                    />

                                )
                            })    
                        }
                            
                        </tbody>
                        {/* TODO: iterar sobre una lista de tareas */}
                    </table>
                </div>
                
            </div>
        </div>
        { <Contactform add={addContact} /> }
   
        
    </div>  
);
};



export default ContactListComponent;
