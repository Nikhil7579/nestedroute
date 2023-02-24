import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Gallery from '../Pages/Gallery'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import User from '../Pages/User'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/"  >
          <Route Index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User />} >
            <Route path="profile" element={<Profile />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default Index

