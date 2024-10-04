import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ApiInstance } from "../ApiInstance"

export const BookingPage = () => {
    const [currentProperty, setCurrentProperty] = useState({})
    const { id } = useParams()
    useEffect(()=>{
        ApiInstance.get(`/visitor/property/${id}`)
    },[])

    const handleClick = () =>{
        ApiInstance.post(`/book/${id}`)
        .then(()=>{
            alert("property booked")
        })
        .catch(err=>console.log(err))
    } 
    return (
        <div>
            {currentProperty && (
                <div>
                    <div>{currentProperty.name}</div>
                    <div>{currentProperty.price}</div>
                    <div>{currentProperty.description}</div>
                    <div>{currentProperty.image}</div>
                    <button onClick={handleClick}>Book Now</button>
                </div>
            )}
        </div>
    )
}
