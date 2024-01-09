import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
      <Link to='/addEvents'>Add Events</Link>
    </div>
  )
}

export default Admin