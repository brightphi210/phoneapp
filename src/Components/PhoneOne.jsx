import React from 'react'
import image1 from './images/default.png'

const PhoneOne = ({setNumber, handleSubmit, scarmAlert, isLoading}) => {


  const handleChange = (e) => {
    setNumber(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className='bg-zinc-900 w-full h-[45rem] rounded-[1rem] relative'>
        {/* <h2 className='text-center pt-10 text-md font-bold'>Phone One</h2> */}

        <div>
            <div className='pt-10'>
                <img src={image1} alt="" className='w-32 m-auto'/>
                <h2 className='text-center pt-2'>Bright Philip</h2>


                <div className='m-auto justify-center flex flex-col items-center pt-10'>
                    <h2 className='text-zinc-500'>Default Numbers: </h2>
                    <p className='text-zinc-600 text-lg pt-3'>08094422807, 08062119957, 09023429652</p>
                    <input required onChange={handleChange} type="text" 
                      placeholder="Enter Number Here" 
                      className="input input-bordered w-10/12 mt-5 bg-zinc-700 rounded-lg text-sm" 
                    />


                    <p>This is scarm alert{scarmAlert}</p>
                </div>
            </div>


        </div>
        <button type='submit' className='
          bg-green-600 p-3 w-10/12 m-auto flex 
          text-center justify-center rounded-md 
          absolute bottom-10 left-0 right-0 
          hover:bg-green-500'
        >
            {isLoading === true ? 'Calling . . ' : 'Call'}
        </button>
    </form>
  )
}

export default PhoneOne