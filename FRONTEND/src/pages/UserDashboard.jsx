import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ApiInstance } from "../ApiInstance";

const UserDashboard = () =>{
    const [properties, setProperties] = useState([])
    

    const navigate = useNavigate();

 useEffect(()=>{
    ApiInstance.get('/visitor/property')
    .then((res)=>{
        setProperties(res.data)
    })
    .catch(()=>console.log("error"))
 },[])

    
    

   const handleClick = (id) =>{
      
       navigate(`/bookingPage/${id}`)
   }
   
    return(
        <div className="container">
        <h1>User Dashboard</h1>
       
        <div className="content-container">
            {properties && properties.map((property,index)=>(
                <div key={index} className="card-cotainer">
                    <div>{property.image[0]}</div>
                    <div>{property.name}</div>
                    <div>{property.price}</div>
                    <button onclick={()=>handleClick(property._id)}>Book Property</button>


                </div>
            ))}
        </div>
        </div>
    )
}

export { UserDashboard }