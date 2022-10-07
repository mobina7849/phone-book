import React from 'react';
import Form from "../../component/Form"
const AddContact = ({formData,setFormData,formStatus,setFormStatus,contacts,setContacts}) => {
    return ( 
        <Form formData={formData} setFormData={setFormData} formStatus={formStatus} setFormStatus={setFormStatus} contacts={contacts} setContacts={setContacts}  />
       );
}
 
export default AddContact;