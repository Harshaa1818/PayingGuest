import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const UserDashboard = () =>{
    const [properties, setProperties] = useState([])

    const navigate = useNavigate();

    let timer = null;
    const search = () =>{
        axios.get(`http://localhost:8000/getproperty/property?name=${args}`)
        .then((res)=>{
            setProperties(res.data)


        })
        .catch(err=>console.log(err)
        )
    }

    const handleBebouncing = (search,delay) =>{
        

        clearTimeout(timer)

        return (...args)=>{
           timer =  setTimeout(()=>{
            search(...args)
           },delay)

        }
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

    const handleSearch = handleBebouncing(search,1000)
    return(
        <div className="container">
        <h1>User Dashboard</h1>
        <div>
            <input type="text" placeholder="search"/>
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