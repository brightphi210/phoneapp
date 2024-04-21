import React from 'react'
import image1 from './images/default.png'

const PhoneTwo = ({isLoading, setIsLoading}) => {

  return (
<div className='bg-zinc-900 w-full h-[45rem] rounded-[1rem] relative'>
        {/* <h2 className='text-center pt-10 text-md font-bold'>Phone One</h2> */}

        <div>
            <div className='pt-10 flex px-10'>
                <img src={image1} alt="" className='w-10'/>
                <h2 className='pt-2 ml-auto'>Obed John</h2>
            </div>


            <h2 className='text-center pt-32 text-3xl'>Incoming Call . . .</h2>

        </div>
        <button 
          onClick={()=>setIsLoading(false)}
          className='bg-red-600 p-3 w-10/12 
            m-auto flex text-center justify-center 
            rounded-md absolute bottom-10 left-0 right-0'
          >
            Decline
        </button>
    </div>
  )
}

export default PhoneTwo