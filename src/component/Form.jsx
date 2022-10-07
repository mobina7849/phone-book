import React from 'react';
import './Form.style.css'
import phonebook from "../images/phonebook.jpg";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const Form = ({formData,setFormData,formStatus,setFormStatus,contacts,setContacts}) => {
    const nav=useNavigate()
    const handleInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("kjhgfd")
        if(formStatus==="add"){
           setContacts([
          ...contacts,
          {
            id: Math.floor(Math.random() *1000),
            userProfile:"",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            age: formData.age,
            country: formData.country,
            favorite: false,
          },
          ]);
        }else{
          setContacts(contacts.map(item=>(item.id===formData.id ?formData : item))
          )
        }
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          country: "",
        });
        setFormStatus('add')
        nav("/")
      };
      
    return ( 
        <div className="form">
            <picture>
                <img className='imgPhone' src={phonebook}alt="phonebook" />
            </picture>
            <form className='contentForm' onSubmit={handleSubmit}>
          <input
            onChange={handleInputs}
            type="text"
            className="input fa"
            name="name"
            value={formData.name}
            placeholder="&#xf007; Name"
          />
          <input
            onChange={handleInputs}
            type="email"
            className="input fa"
            name="email"
            value={formData.email}
            placeholder="&#xf0e0; @Email"
          />
          <input
            onChange={handleInputs}
            type="number"
            className="input fa"
            name="phone"
            value={formData.phone}
            placeholder="&#xf3cd; Phone Number"
          />
          <input
            onChange={handleInputs}
            type="number"
            className="input fa"
            name="age"
            value={formData.age}
            placeholder="&#xf073; Age"
          />
          <input
            onChange={handleInputs}
            type="text"
            className="input fa"
            name="country"
            value={formData.country}
            placeholder="&#xf024; Country"
          />
          <button   type="submit" className="btnSubmit">
            {formStatus==="add"?<iconify-icon icon="carbon:user-follow" style={{color: "white", width:"40", height:"40"}}></iconify-icon>:'Update'}
          </button>
            </form>
        </div>
     );
}
 
export default Form;