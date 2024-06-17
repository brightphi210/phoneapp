import React, { useRef, useState } from 'react'
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


    const url = 'https://seven8nein.com/phonnart/api/call';

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      console.log('Button Clicked');
      setIsLoading(true);
    
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ number }),
        });
    
        const data = await response.json();
    
        if (data.scam === false) {
          setScamAlert('false');
        } else if (data.scam === true) {
          setScamAlert('true');
        }
    
        console.log(data.scam);
      } catch (error) {
        console.error('Error:', error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    


      const handleCancle = () => {
        setScamAlert('');
        setIsLoading(false);
      }

      const handleAccept = () => {
        setScamAlert('accepted');
        setIsLoading(false);
      }

      const handleDeclined = () => {
        setScamAlert('declined');
        setIsLoading(false);
      }




      
  return (
    <div>
        <nav class="flex justify-around bg-zinc-900 text-white fixed w-full z-50">
            <div class="flex  gap-1 align-center text-center cursor-pointer ml-10 py-4">
                <Link to={'/'}><p class="lg:text-2xl lg:font-bold text-white text-md">Pho<span className='text-green-600'>nart</span></p></Link>
            </div>
            <button className='' onClick={logout}>Logout</button>
        </nav>


        <div className='lg:pt-40 flex justify-center w-full pt-28 lg:mb-10'>
            <div className='lg:flex lg:flex-row w-full justify-around 2xl:px-80 xl:px-40 lg:px-40 lg:gap-20 flex flex-col gap-5 px-5'>
                <PhoneOne setNumber={setNumber} handleSubmit={handleSubmit} scarmAlert={scarmAlert} isLoading={isLoading}/>
                <PhoneTwo scarmAlert={scarmAlert} setScamAlert={setScamAlert} handleDeclined={handleDeclined} handleAccept={handleAccept} isLoading={isLoading} setIsLoading={setIsLoading} handleCancle={handleCancle} />
            </div>
        </div>
    </div>
  )
}

export default Dashboard