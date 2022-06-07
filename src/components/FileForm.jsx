import React from 'react'
import {useState} from 'react'
import { AppContext } from '../App'

function FileForm() {
    const [hotel, setHotel] = useState(AppContext)
    function handleSubmit(event) {
        event.preventDefault()
        const data = new FormData()
        data.append("post[name]", event.target.name.value )
      data.append("post[image]", event.target.image.files[0] )
      submitToApi(data)

    }
function submitToApi (data){
    fetch (`http://localhost:3000/hotels`, {
        method: "GET",
        // body: data
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // setHotel(data.image_url)
    }
    )
    .catch (error => console.log(error))


}    
  return (
    <div>FileForm
        <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name"  />
            <label htmlFor="image">File:</label>
            <input type="file" name="image" id="image"  />
            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default FileForm