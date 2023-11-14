import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Update = () => {
  const {id}=useParams()
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8000/getuser/' +id)
    .then((res)=>{
      setName(res.data.name)
      setEmail(res.data.email)
      setAge(res.data.age)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:8000/update/'+id, {name, email, age})
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
      <h3>Welcome To Update user page</h3>
      <input type="text" placeholder='name...' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder='email...' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="number" placeholder='number...' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={handleSubmit}>update</button>
    </div>

    
  )
}

export default Update
