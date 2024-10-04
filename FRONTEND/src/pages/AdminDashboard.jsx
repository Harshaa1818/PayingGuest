import React, { useEffect, useState } from 'react' 
import { ApiInstance } from '../../ApiInstance'
const AdminDashboard = () =>{

    const [ properties, setProperties ] = useState([])
   // const [ShowAllProperties, setShowAllProperties] =useState(true)
    const [pendingProperties,setPendingProperties] =useState([])

    useEffect(()=>{
        ApiInstance.get('/admin/pending')
        .then((res)=>{
            setPendingProperties(res.data)

        })
        .catch((err)=> console.log(err)
        )

    },[])

   
    const handleApproveProperty = (id) =>{
        ApiInstance.post(`/admin/approve/${id}`)
        .then((res)=>{
            alert("property approved")
            setPendingProperties(pendingProperties.filter(property=>property._id !== id))
        })
        .catch(err=>alert("operation failed",err))

    }

    const handleRejectProperty = (id) => {
        ApiInstance.delete(`/admin/delete/${id}`)
        .then(()=>{
            alert("property rejected")
            setPendingProperties(pendingProperties.filter(property=>property._id !== id))

        })
        .catch((err)=>alert("operation failed",err))
        
    }

    return(
    <>
    <h1>Admin Dashboard</h1>
    
        { pendingProperties && pendingProperties.map((property,index)=>(
            <div key={index}>
            <div >{property.title}</div>
            <div>{property.name}</div>
            <button onClick={()=>handleApproveProperty(property._id)}>Approve</button>
            <button onClick={()=>handleRejectProperty(property._id)}>Reject</button>
            </div>
        ))}
    
   




    </>)
}

export { AdminDashboard }