import React from 'react'
import img from '../assets/1659361511042.jpeg'

export const ThankYou = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="py-5">
            <h1>Thank you, your payment is being processed</h1>
        </div>
        <div>
            <img src={img} alt="img" />
        </div>

        <div className="py-4">
            <p>You will recive an email shortly</p>
        </div>
    </div>
  )
}

