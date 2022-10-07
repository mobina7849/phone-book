import  mm from "../../images/download.jpg"
import Search from "../../component/Search";
import Table from "../../component/Table";
import React, { useState,useEffect } from "react";
import "./home.style.css"

import { Link } from "react-router-dom";

const Home = ({contacts,setContacts,setFormData, setFormStatus,info,setInfo}) => {
  
  const[favoriteStatus,setFavoriteStatus]=useState("all")
  const[filtered,setFiltered]=useState([])
  const[search,setSearch]=useState("")
  useEffect(()=>{
    handleFilter();
  },[contacts,favoriteStatus])

  const handleFilter=()=>{
    switch(favoriteStatus){
      case 'favorite':
        setFiltered(contacts.filter(contact=>contact.favorite===true))
        break;
      case 'usual':
        setFiltered(contacts.filter(contact=>contact.favorite===false))
        break;
      default:
        setFiltered(contacts)
        break;
    }}
    return ( 
     <div className="container">
        <div className="myprofile">
          <div className="leftProfile">
            <picture>
            <img className="myImg" src={"https://avatars.dicebear.com/api/avataaars/mey.svg"}/>
            </picture>
            <p>
            <div className="bold">My Profile</div>
            <div className="Name">Mobina Abbasi</div>
            <div className="Email">mobina.abbasi7849@gmail.com</div>
            </p>
          </div>
          <div>
            <Link className="Link" to={{
                pathname:"/add-contact"
 
                }}>
                 <button className="btnProfile" style={{ background:'linear-gradient(to right,#AA31C2, #f4e2d8)'}}>
                     add contact
                </button>
            </Link>

          </div>
        </div>
        <Search setFavoriteStatus={setFavoriteStatus} setSearch={setSearch}/>
        <div className="table">
          <table
            style={{
              width: "100%",
              height:"auto"
            }}
          >
            <thead>
              <tr className="row1">
                <th className="dNone">id</th>
                <th>user profile</th>
                <th className="dNone">age</th>
                <th className="dNone">country</th>
                <th>favorite</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.filter(item=>item.name.toLowerCase().includes(search)).map((contact) => (
                <Table contacts={contacts} setContacts={setContacts}  setFormData={setFormData} setFormStatus={setFormStatus} contact={contact} info={info} setInfo={setInfo} />
              ))}
            </tbody>
          </table>
        </div>
    </div>
     );
}
 
export default Home;
//<button className="btnProfile" style={{ background: show ? 'linear-gradient(to right,#F11712, #f4e2d8)' : "linear-gradient(to right,#AA31C2, #f4e2d8)"}} onClick={()=>setShow(!show)}>
//{show? "Close":"Add contact"}