import axios from 'axios'
import React, { useState } from 'react'

function BookingPage({property}) {
    const [count, setCount] = useState(0)

    const handlePayment = () =>{
        razorpay({amount: price*count, userId: localStorage.getItem("user")._id, propertyId: property._id})
        .then((res)=>{
            alert("payment sucesfull, proerty booked")
        })
        .catch((err)=>{
            alert("booking failed")
            console.log(err)
    })
    }


    
    

  return (
    <div>
      {property.image}
      {property.name}
      {property.price}
      quantity: {count} <span onClick={()=>setCount(count++)}>+</span><span onclick={()=>setCount(count--)}>-</span>
      <button onclick={handlePayment}>Proceed to payment</button>
    </div>
  )
}

export default BookingPage
