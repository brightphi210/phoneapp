import React from 'react'
import PhoneOne from '../Components/PhoneOne'
import PhoneTwo from '../Components/PhoneTwo'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <nav class="flex bg-zinc-900 fixed w-full">
            <div class="flex gap-1 align-center text-center cursor-pointer ml-10 py-4">
                <Link to={'/'}><p class="lg:text-2xl lg:font-bold text-white text-md">Pho<span className='text-green-600'>nart</span></p></Link>
            </div>
        </nav>


        <div className='pt-40 flex justify-center w-full'>
            <div className='flex w-full justify-around px-96 gap-40'>
                <PhoneOne />
                <PhoneTwo />
            </div>
        </div>
    </div>
  )
}

export default Dashboard