import React, { useState } from 'react'
import PhoneOne from '../Components/PhoneOne'
import PhoneTwo from '../Components/PhoneTwo'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {



    let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

    const navigate = useNavigate()

    const logout = async (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/login')
    }


    const [number, setNumber] = useState('')
    const [scarmAlert, setScamAlert] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const url = 'https://seven8nein.com/phonnart/api/call' 

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        console.log('Button Clicked');
        setIsLoading(true);
      
        try {
      
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Corrected content type
              'Authorization': `Bearer ${token}` // Assuming 'token' is defined elsewhere
            },
            body: JSON.stringify({ number })
          });
          
          // setIsLoading(false);
          if (response.status===200) { 
            setScamAlert('false')
          }


          else if(response.status===400){
            setScamAlert('true')
          }
      
          const data = await response.json();
          console.log('Success:', data);
        } catch (error) {
          console.error('Error:', error.message); // Log the error message
        }
      };
      
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
                <PhoneOne setNumber={setNumber} handleSubmit={handleSubmit} scarmAlert={scarmAlert} isLoading={isLoading}/>
                <PhoneTwo scarmAlert={scarmAlert} isLoading={isLoading} setIsLoading={setIsLoading}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard