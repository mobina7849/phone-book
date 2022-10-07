import "./App.css";
//import "./Form.style.css"
//import "./Table.style.css"
//import "./Search.style.css"
import React, { useState} from 'react';
import { RouterProvider  } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddContact from "./pages/addContact/addContact";
import InfoContact from "./pages/infoContact/infoContact";
import { createBrowserRouter } from "react-router-dom";
//import { createConfirmation } from 'react-confirm';

function App() {
  //useEffect
  const [contacts, setContacts] = useState([
    {
      id: "0",
      userProfile: "https://avatars.dicebear.com/api/avataaars/y.svg",
      name: "nahid",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "12",
      country: "iran",
      favorite: false,
    },
    {
      id: "1",
      userProfile: "https://avatars.dicebear.com/api/avataaars/your.svg",
      name: "reza",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "34",
      country: "aragh",
      favorite: true,
    },
    {
      id: "2",
      userProfile: "https://picsum.photos/20",
      name: "ali",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "67",
      country: "turkey",
      favorite: false,
    },
    {
      id: "3",
      userProfile: "https://picsum.photos/20",
      name: "shahin",
      email: "email@gmail.com",
      phone: "0987687654",
      age: "54",
      country: "rom",
      favorite: true,
    },
  ]);
  const[formStatus,setFormStatus]=useState("add")
  const[info,setInfo]=useState()
  const [formData, setFormData] = useState({
    id: "0",
    userProfile: "img",
    name: "",
    email: "",
    phone: "",
    age: "",
    country: "",
    favorite: false,
  });


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home contacts={contacts} setContacts={setContacts} setFormData={setFormData} setFormStatus={setFormStatus} info={info} setInfo={setInfo} />,
    },
    {
      path: "add-contact",
     element: <AddContact formData={formData} setFormData={setFormData} formStatus={formStatus} setFormStatus={setFormStatus} contacts={contacts} setContacts={setContacts}/>,
    },
    {
      path: "info/:id",
      element: <InfoContact info={info} />,
    },{
    path: "update/:id",
    element: <AddContact formData={formData} setFormData={setFormData} formStatus={formStatus} setFormStatus={setFormStatus} contacts={contacts} setContacts={setContacts} />,
   },
  ]);
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
