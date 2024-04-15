import React, { useState } from 'react'
import PhoneOne from '../Components/PhoneOne'
import PhoneTwo from '../Components/PhoneTwo'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {



    let [tokentoken, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

    const navigate = useNavigate()

    const logout = async (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/login')
    }


    const [number, setNumber] = useState('')

    const url = 'https://seven8nein.com/phonnart/api/call' 

    const handleNumber = async (e) => {
        e.preventDefault()

        console.log('Button Clicked');

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application',
                    'Authorization': `Bearer ${tokentoken}`
                },

                body : JSON.stringify({
                    number
                })
            })


            if(res.statusCode === 200){
                console.log(res.body)
            }
        } catch (error) {
            
        }
    }
  return (
    <div>
        <nav class="flex justify-around bg-zinc-900 fixed w-full ">
            <div class="flex  gap-1 align-center text-center cursor-pointer ml-10 py-4">
                <Link to={'/'}><p class="lg:text-2xl lg:font-bold text-white text-md">Pho<span className='text-green-600'>nart</span></p></Link>
            </div>
            <button className='' onClick={logout}>Logout</button>
        </nav>


        <div className='pt-40 flex justify-center w-full'>
            <div className='lg:flex lg:flex-row w-full justify-around lg:px-96 lg:gap-40 flex flex-col gap-5 px-10'>
                <PhoneOne setNumber={setNumber} handleNumber={handleNumber}/>
                <PhoneTwo />
            </div>
        </div>
    </div>
  )
}

export default Dashboard