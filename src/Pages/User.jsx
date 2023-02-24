import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const User = () => {
  return (
    <>
      <div className='main'>
          <button>
          <Link to={"profile"}>
          Profile
          </Link>
          </button>
        <button>
          <Link  to={"gallery"}>
          Gallery
          </Link>
          </button>
        <button>
          <Link  to={"blog"}>
          Blog
          </Link>
          </button>
          <Outlet />
      </div>
      
    </>
  )
}

export default User
