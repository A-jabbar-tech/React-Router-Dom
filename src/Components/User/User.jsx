import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    
    <div className='text-center bg-gray-500 text-white text-3xl p-4'>
      UserId  {userid}
    </div>
  )
}

export default User
