import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterComp = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const url = 'https://seven8nein.com/phonnart/api/register';

    const handFetch = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    number: number,
                    password: password
                })
            });

                const data = await res.json();
                setIsLoading(false);

                if(data.status === 200){
                    console.log(data);
                    navigate('/login')
                }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };


  return (
    <div className='bg-black text-white'>
        <nav class="flex bg-zinc-900 fixed w-full ">
            <div class="flex gap-1 align-center text-center cursor-pointer ml-10 py-4">
                <Link to={'/'}><p class="lg:text-2xl lg:font-bold text-white text-md">Pho<span className='text-green-600'>nart</span></p></Link>
            </div>
        </nav>


        <form className='flex justify-center items-center h-screen w-full' onSubmit={handFetch}>
                <div className='w-full flex flex-col gap-7'>
                    <h2 className='text-center lg:text-2xl font-bold text-lg'>Register for Pho<span className='text-green-600'>nart</span></h2>

                    <div className='flex flex-col lg:w-1/3 w-10/12 m-auto'>
                        <label htmlFor="name" className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Full Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                            required
                            className="input input-bordered bg-zinc-950 text-xs rounded-lg lg:p-8 p-6"
                        />
                    </div>

                    <div className='flex flex-col lg:w-1/3 w-10/12 m-auto'>
                        <label htmlFor="number" className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Phone Number:</label>
                        <input
                            id="number"
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Phone Number"
                            required
                            className="input input-bordered bg-zinc-950 text-xs rounded-lg lg:p-8 p-6"
                        />
                    </div>

                    <div className='flex flex-col lg:w-1/3 w-10/12 m-auto'>
                        <label htmlFor="password" className='text-left lg:text-lg text-xs lg:font-bold font-medium pb-2'>Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="input input-bordered bg-zinc-950 text-xs rounded-lg lg:p-8 p-6"
                        />
                    </div>
                    <button className='bg-green-600 lg:w-1/3 w-10/12 m-auto p-3 rounded-lg text-sm'>{isLoading === true ? 'Loading. .' : 'Register'}</button>

                    <p className='lg:w-1/3 w-10/12 m-auto text-xs'>Already have an account? <Link to={'/login'}><span className='text-green-600'>Login</span></Link></p>
                </div>
            </form>
    </div>
  )
}

export default RegisterComp