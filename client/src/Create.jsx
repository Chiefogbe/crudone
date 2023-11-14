import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/create', {name, email, age})
      .then((res)=>{
        console.log(res)
        navigate('/')
      })
      .catch((error)=>{
        console.log(error)
      })
  }


  return (
    <div>
      <h3>Welcome To Create user Page</h3>

      <input type="text" placeholder='name...' onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder='email...' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="number" placeholder='number...' onChange={(e)=>setAge(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Create
