import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    const {followers,name} = data
    useEffect(() => {
      fetch('https://api.github.com/users/morshed-17')
      .then(res => res.json())
      .then(data => setData(data))
    }, [])
  return (
    <>
    <img className='rounded-full mx-auto w-[200px]' src={data.avatar_url} alt="" />
    <div className='text-3xl font-bold text-gray-700 m-6'>Name: {name}</div>
    <div className='text-3xl font-bold text-gray-700 m-6'>Followers: {followers}</div>
    </>
  )
}

export default Github