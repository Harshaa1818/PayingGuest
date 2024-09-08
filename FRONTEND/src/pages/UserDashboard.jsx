import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const UserDashboard = () =>{
    const [properties, setProperties] = useState([])
    const [name, setName] = useState("")

    const navigate = useNavigate();

    let timer = null;
    const search = (args) => {
        axios.get(`http://localhost:8000/visitor/${args}`)
        .then((res)=>{
            setProperties(res.data)
        })
        .catch(err=>console.log(err)
        )
    }

    const handleDebouncing = (name) => {
        

        clearTimeout(timer)

        
           timer =  setTimeout(()=>{
            search(name)
           },3000)

        }
    

    const handleBookProperty = (e) => {
        axios.post(`http://localhost:8000/create/${e._id}`)
        .then((res)=>{
            navigate('/bookingpage', {property : e })

        })
        .catch((err)=>{
            console.log(err);
            

        })
    }

   
    return(
        <div className="container">
        <h1>User Dashboard</h1>
        <div>
            <input type="text" onChange={(e)=>handleDebouncing(e.target.value)} placeholder="search"/>
        </div>
        <div className="content-container">
            {properties && properties.map((property,index)=>(
                <div key={index} className="card-cotainer">
                    <div>{property.image}</div>
                    <div>{property.name}</div>
                    <div>{property.price}</div>
                    <button onclick={handleBookProperty}>Book Property</button>


                </div>
            ))}
        </div>
        </div>
    )
}

export { UserDashboard }