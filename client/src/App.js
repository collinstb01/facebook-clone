import React, { useEffect } from 'react'
import Navbar from './components/home/navbar.js'
import Home from './components/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './components/auth/auth'
import { useDispatch } from 'react-redux'
import UserProfile from "./components/UserProfile/UserProfile"
import { getposts } from './actions/posts'
const App = () => {
  const dispatch = useDispatch();



  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={
            <div>
              <Navbar />
              < Home />
            </div>
          } />
          <Route path='/auth' element={
            <div>
              <Auth />
            </div>
          } />
          <Route path='/userProfile/:id' element={
            <div>
              <UserProfile />
            </div>
          } />
        </Routes>
      </div>
    </Router>

  )
}

export default App