import React from 'react'
import { Link } from 'react-router'

export const Sidebar = () => {
  return (
    <div id='sidebar'>
      <Link to="/home"><img src="" alt="" /></Link>
      <Link to="/search"><button>Search</button></Link>
      <Link to="/chats"><button>Chats</button></Link>
      <Link to="/upload"><button>Upload</button></Link>
      <Link to="/videos"><button>Videos</button></Link>
      <Link to="/account"><button>Account</button></Link>
    </div>
  )
}
