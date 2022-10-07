import React from 'react';
import './Table.style.css';
import { Link } from 'react-router-dom';
const Table = ({setContacts,contacts,setFormData,setFormStatus,contact ,info,setInfo}) => {
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this contact?")) {
          setContacts(contacts.filter((contact) => contact.id !== id));
        }
      };
    const handleFavorite = (id) => {
        setContacts(
          contacts.map((contact) =>
            contact.id === id
              ? { ...contact, favorite: !contact.favorite }
              : contact
          )
        );
      };
    
      const handleUpdate=(contact)=>{
        //console.log('lkjuhg')
        setFormData(contact)
        setFormStatus("update")
        
      }
      const handleInfo=(contact)=>{
        setInfo(contact)
        //console.log(info)
      }
    return ( 
      //<Link to={"/info"} className="trr" >
          <tr key={contact.id} className="row" >
            <td className='dNone'>{contact.id}</td>
            <td className="profile">
            <picture>
                <img src={`https://avatars.dicebear.com/api/avataaars/${contact.name}.svg`} className="imgProfile"/>
            </picture>
            <div className="content">
                <p className='name'>{contact.name}</p>
                <p className='email'>{contact.email}</p>  
                <p className='phone'>{contact.phone}</p>
            </div>
            </td>
            <td className='dNone'>{contact.age}</td>
            <td className='dNone'>{contact.country}</td>
            <td  className='favorite' onClick={() => handleFavorite(contact.id)}>
                {contact.favorite ? (
                <iconify-icon
                 icon="material-symbols:favorite"
                 style={{ color: "red", width: "30", height: "30" }}
                 ></iconify-icon>
             ) : (
                 <iconify-icon
                 icon="ic:twotone-favorite-border"
                 style={{ color: " red", width: "30", height: "30" }}
                  ></iconify-icon>
            )}
            </td>
            <td className='oo'>
              <div className='btns'>
              <button className='btnn' onClick={() => handleDelete(contact.id)}>
                <iconify-icon icon="fluent:delete-24-filled" style={{color:"white", width:"30" ,height:"30"}}></iconify-icon>
                </button>
                <Link className='Link' to={`/update/${contact.id}`}>
                  <button className='btnn' onClick={() => handleUpdate(contact)}><iconify-icon icon="akar-icons:edit" style={{color: "white", width:"40" ,height:"40"}}></iconify-icon></button>
                </Link>
                <Link className='Link' to={`/info/${contact.id}`}> <button className='btnn btnInfo ' onClick={()=>handleInfo(contact)}><iconify-icon icon="bxs:user-detail" style={{color: "white", width:"40", height:"40"}}></iconify-icon></button></Link>

              </div>
            </td>
          </tr>
     // </Link>

     );
}
 
export default Table;