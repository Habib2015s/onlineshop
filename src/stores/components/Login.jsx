import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' flex justify-center bg-lime-50 items-center h-screen'>
      <p className='text-center fixed top-20 font-bold text-2xl'>Login Page</p>

    <form className='border-gray-700 p-4 flex-col flex bg-white gap-y-2 justify-center items-center w-1/2 h-1/2 rounded-md shadow-lg
     shadow-cyan-500/50' >
      
        <p className='text-center '>Specifications</p>
        <div className='w-1/2 justify-center items-center h-3/4 flex-col flex gap-3'>
        <div>
          <p>UserName</p>
            <input placeholder='Enter Username' type='string'/>

        </div>
        <br/>
        <div>
            <p>Password</p>
            <input placeholder='Enter Password' type='password'/>

        </div>
        </div>
        <Link to={"/"}>
            <button className="bg-lime-500 shadow-lime-500-500/50 relative bottom-6 text-white w-20 mr-5  rounded-md p-1 text-xl">Submit</button>
           </Link>
         </form>
    </div>
  )
}

export default Login