import React, { useEffect, useState } from 'react'
// import { Dummydata } from './Dummydata'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Users = () => {
  const[users, setUsers]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000')
    .then((res)=>{
      setUsers(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[users])

  const handleDelete=(id)=>{
    axios.delete('http://localhost:8000/deleteuser/'+id)
    .then((res)=>{
      console.log(res)
      window.location.reload()
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <h4>Welcome To User Page</h4>

      {users.map((x, key)=>{
        return(
          <div key={key}>
            <h4>{x.name}</h4>
            <h4>{x.email}</h4>
            <h4>{x.age}</h4>
            <Link to='/Create'><button>Add</button></Link>
            <Link to={`/Update/${x._id}`}><button>Update</button></Link>
            <button onClick={()=>handleDelete(x._id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Users
