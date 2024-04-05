import React from 'react'
import { Link } from 'react-router-dom'

const LoginComp = () => {
  return (
    <div>
        <nav class="flex bg-zinc-950 fixed w-full">
            <div class="flex gap-1 align-center text-center cursor-pointer ml-10 pt-6 pb-10">
                <a href="/css/css/PROJECT2/Spotify.html"><p class="lg:text-3xl lg:font-bold text-white text-md">Pho<span className='text-green-600'>nart</span></p></a>
            </div>
        </nav>


        <form className='flex justify-center items-center h-screen w-full'>
            <div className='w-full flex flex-col gap-7'>
                <h2 className='text-center lg:text-4xl font-bold text-lg'>Login to Pho<span className='text-green-600'>nart</span></h2>

                <div className='flex flex-col lg:w-1/3 w-10/12  m-auto '>
                    <p className='text-left lg:text-lg text-sm lg:font-bold font-medium pb-2'>Email: </p>
                    <input type="text" placeholder="Full Name: " className="input input-bordered bg-zinc-950  rounded-lg lg:p-8 p-7" />
                </div>

                <div className='flex flex-col lg:w-1/3 w-10/12  m-auto '>
                    <p className='text-left lg:text-lg text-sm lg:font-bold font-medium pb-2'>Password: </p>
                    <input type="text" placeholder="Full Name: " className="input input-bordered bg-zinc-950  rounded-lg lg:p-8 p-7" />
                </div>
                <button className='bg-green-600 lg:w-1/3 w-10/12 m-auto p-4 rounded-lg'>Login</button>

                <p className='lg:w-1/3 w-10/12  m-auto'>Dont have an account <Link to={'/register'}><span className='text-green-600'>Register</span></Link></p>
            </div>

        </form>
    </div>
  )
}

export default LoginComp