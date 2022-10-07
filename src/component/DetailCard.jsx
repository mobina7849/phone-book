import React from 'react';
import "./detailcard.style.css"
import { useNavigate } from 'react-router-dom';
const DetailCard = ({info}) => {
    //console.log(info)
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate('/')
    }

    return ( 
        <div className="detailCard">
            <button  onClick={handleBack} className={"backBtn"}><iconify-icon icon="akar-icons:arrow-back-thick-fill" style={{"color":" #9826ab" ,"width":"40", "height":"40"}}></iconify-icon></button>
            <picture>
            <img src={`https://avatars.dicebear.com/api/avataaars/${info.name}.svg`} className="imgProfile size"/>
            </picture>
            <div className='header_card'>
                <h2>Name</h2>
                <p>{info.name}</p>
            </div>
            <div className='detail'>
                <div className='left'>
                    <div>
                        <h2>Phonenumber</h2>
                        <p>{info.phone}</p>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <p>{info.email}</p>
                    </div>
                </div>
                <div className='right'>
                     <div>
                        <h2>Age</h2>
                        <p>{info.age}</p>
                    </div>
                    <div>
                        <h2>Country</h2>
                        <p>{info.country}</p>
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default DetailCard;