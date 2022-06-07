import React from 'react'
import {useState} from 'react'
import { AppContext } from '../App'
import {useEffect} from 'react'

function HotelImage() {
    const [hotel, setHotel] = useState(AppContext)
    useEffect (() => {
        fetch (`http://localhost:3000/hotels`)
        .then(response => response.json())
        .then(data => {
            setHotel(data.image_url)
        }
        )
        .catch (error => console.log(error))
    })
  return (
    <div>
        <img src={hotel} alt="hotel" />
    </div>
  )
}

export default HotelImage