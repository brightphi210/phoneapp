import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterComp = () => {

    const navigate = useNavigate()
    const url = 'https://seven8nein.com/phonnart/api/login'


    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)


    const handleLogin = async (e) => {

        e.preventDefault();

        setIsLoading(true)
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },

                body : JSON.stringify({
                    number,
                    password,
                })
                
            })


            if (res.ok || res.status === 200) {
                setIsLoading(false)
                const data = await res.json();
                localStorage.setItem('token', JSON.stringify(data.token));
                console.log(data)
                navigate('/');
            }
      
      
            else if(res.status === 401){
              console.log('No account found with the given credentials')
              setIsLoading(false)
            }else {
                console.log('This Error occured while logging in');
                setIsLoading(false);
            }
        } catch (error) {
            
        }
    }
  return (
    <div>
        <nav class="flex bg-zinc-900 fixed w-full">
            <div class="flex gap-1 align-center text-center cursor-pointer ml-10 py-4">
            <Link to={'/'}><p class="lg:text-2xl lg:font-bold text-white text-md">Pho<span className='text-green-600'>nart</span></p></Link>
            </div>
        </nav>


        <form className='flex justify-center items-center h-screen w-full' onSubmit={handleLogin}>
            <div className='w-full flex flex-col gap-7'>
                <h2 className='text-center lg:text-2xl font-bold text-lg'>Login to Pho<span className='text-green-600'>nart</span></h2>
                

                <div className='flex flex-col lg:w-1/3 w-10/12  m-auto '>
                    <p className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Phone Number: </p>
                    <input value={number} onChange={(e)=>setNumber(e.target.value)} type="text" placeholder="Phone Number: " className="input input-bordered bg-zinc-950 text-xs  rounded-lg lg:p-8 p-6" />
                </div>

                <div className='flex flex-col lg:w-1/3 w-10/12  m-auto '>
                    <p className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Password: </p>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password: " className="input input-bordered bg-zinc-950 text-xs  rounded-lg lg:p-8 p-6" />
                </div>
                <button type='submit' className='bg-green-600 lg:w-1/3 w-10/12 m-auto p-3 rounded-lg text-sm'>{isLoading ? 'Loading . . ' : 'Login'}</button>

                <p className='lg:w-1/3 w-10/12  m-auto text-xs'>Don't have an account? <Link to={'/register'}><span className='text-green-600'>Register</span></Link></p>

            </div>

        </form>
    </div>
  )
}

export default RegisterComp