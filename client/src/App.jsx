import React from 'react'
import './App.css'
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from './Users'
import Create from './Create'
import Update from './Update'

const App = () => {
  return (
    <div>
      
      <Router>
        <Link to ='/'>Users</Link>
        <Link to ='/Create'>Create</Link>
        <Link to ='/Update'>Update</Link>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
