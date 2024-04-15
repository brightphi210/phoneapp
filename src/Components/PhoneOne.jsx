import React from 'react'
import image1 from './images/default.png'

const PhoneOne = ({setNumber, handleNumber}) => {
  return (
    <form onSubmit={handleNumber} className='bg-zinc-900 w-full h-[45rem] rounded-[2rem] relative'>
        <h2 className='text-center pt-10 text-md font-bold'>Phone One</h2>

        <div>
            <div className='pt-5'>
                <img src={image1} alt="" className='w-40 m-auto'/>
                <h2 className='text-center pt-2'>Caller One</h2>


                <div className='m-auto justify-center flex flex-col items-center pt-10'>
                    <h2 className='text-zinc-500'>Default Numbers: </h2>
                    <p className='text-zinc-600'>08094422807, 08062119957, 09023429652</p>

                    <input required onChange={(e)=> setNumber(e.target.value)} type="text" placeholder="Enter Number Here" className="input input-bordered w-10/12 mt-5 bg-zinc-700 rounded-lg" />
                </div>
            </div>


        </div>
        <button type='submit' className='bg-green-600 p-3 w-10/12 m-auto flex text-center justify-center rounded-2xl absolute bottom-10 left-0 right-0 hover:bg-green-500'>Call</button>
    </form>
  )
}

export default PhoneOne