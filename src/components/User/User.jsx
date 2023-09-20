import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-orange-400 p-6 text-3xl text-white font-bold'> {userId}</div>
  )
}

export default User