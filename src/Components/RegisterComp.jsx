import React from 'react'
import { Link } from 'react-router-dom'

const RegisterComp = () => {
  return (
    <div>
        <nav class="flex bg-zinc-900 fixed w-full">
            <div class="flex gap-1 align-center text-center cursor-pointer ml-10 py-6">
                <a href="/css/css/PROJECT2/Spotify.html"><p class="lg:text-3xl lg:font-bold text-white text-md">Pho<span className='text-green-600'>nart</span></p></a>
            </div>
        </nav>


        <form className='flex justify-center items-center h-screen w-full'>
            <div className='w-full flex flex-col gap-7'>
                <h2 className='text-center lg:text-4xl font-bold text-lg'>Login to Pho<span className='text-green-600'>nart</span></h2>
                
                <div className='flex flex-col lg:w-1/3 w-10/12  m-auto '>
                    <p className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Full Name: </p>
                    <input type="text" placeholder="Full Name: " className="input input-bordered bg-zinc-950 text-xs  rounded-lg lg:p-8 p-6" />
                </div>

                <div className='flex flex-col lg:w-1/3 w-10/12  m-auto '>
                    <p className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Email: </p>
                    <input type="text" placeholder="Full Name: " className="input input-bordered bg-zinc-950 text-xs  rounded-lg lg:p-8 p-6" />
                </div>

                <div className='flex flex-col lg:w-1/3 w-10/12  m-auto '>
                    <p className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Password: </p>
                    <input type="text" placeholder="Full Name: " className="input input-bordered bg-zinc-950 text-xs  rounded-lg lg:p-8 p-6" />
                </div>
                <button className='bg-green-600 lg:w-1/3 w-10/12 m-auto p-3 rounded-lg text-sm'>Register</button>

                <p className='lg:w-1/3 w-10/12  m-auto text-xs'>Already have an account? <Link to={'/'}><span className='text-green-600'>Login</span></Link></p>

            </div>

        </form>
    </div>
  )
}

export default RegisterComp