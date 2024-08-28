import React, { useEffect, useState } from 'react' 
const AdminDashboard = () =>{

    const [ properties, setProperties ] = useState([])
    const [ShowAllProperties, setShowAllProperties] =useState(true)
    const [pendingProperties,setPendingProperties] =useState([])

    useEffect(()=>{
        axios.get("http://loaclhost:8000/admin/getAllProperties")
        .then((res)=>{
            setProperties(res.data)

        })
        .catch((err)=> console.log(err)
        )

    },[])

    const handleGetPendingProperties = () => {
        setShowAllProperties(false)
        axios.get("http://loaclhost:8000/admin/getAllProperties")
        .then((res)=>{
            setPendingProperties(res.data)
        })

    }
    const handleApproveProperty = () =>{
        axios.post(`http://localhost:8000/admin/deleteProperty/:${e._id}`)
        .then((res)=>{
            alert("property not approved, its doesnt meet criteria")
        })
        .catch(err=>alert("operation failed"))

    }

    const handleRejectProperty = (e) => {
        
    }

    return(
    <>
    <h1>Admin Dashboard</h1>
    
        { ShowAllProperties && properties.map((property,index)=>(
            <div key={index}>
            <div >{property.title}</div>
            <div>{property.name}</div>
            </div>
        ))}
    
   {ShowAllProperties && <button onClick={handleGetPendingProperties}>Get all Pending Properties</button>}

   {
    pendingProperties.map((property,index)=>{
        <div key={index}>
            <div >{property.title}</div>
            <div>{property.name}</div>
            <button onClick={handleApproveProperty}>Approve</button>
            <button onClick={handleRejectProperty}>Reject</button>
        </div>
    })

   }




    </>)
}

export { AdminDashboard }