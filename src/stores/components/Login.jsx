import React from 'react'

const Login = () => {
  return (
    <div className=' flex justify-center items-center h-screen'>

    <div className='border-gray-700  justify-center items-center w-1/2 h-1/2 rounded-md shadow-lg
     shadow-cyan-500/50' >
        <p className='text-center'>Specifications</p>
        <div className='w-1/2 justify-center items-center flex-col flex gap-3'>
            <input placeholder='Username' type='string'/>
            <input placeholder='Password' type='password'/>
        </div>

         </div>
    </div>
  )
}

export default Login