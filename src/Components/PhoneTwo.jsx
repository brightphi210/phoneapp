import React from 'react'
import image1 from './images/default.png'
import audio1 from './images/numberScarm.mp3'
import audio2 from './images/numberVerified.mp3'
import audio3 from './images/callAnswered.mp3'
import audio4 from './images/callDeclined.mp3'
import icon from './images/freepik-export-202404231552168XXH.png'

const PhoneTwo = ({handleCancle, scarmAlert, handleAccept, handleDeclined}) => {

  return (
<div className='bg-zinc-900 w-full h-[32rem] md:h-[32rem] lg:h-[45rem] mb-10 lg:m-0 rounded-[1rem] relative'>
        {/* <h2 className='text-center pt-10 text-md font-bold'>Phone One</h2> */}

        <div className=''>
            <div className='pt-10 flex px-10'>
                <img src={image1} alt="" className='w-10'/>
                <h2 className='pt-2 ml-auto'>Obed John</h2>
            </div>


            {scarmAlert === 'true' && (

              <div>
                <h2 className='text-center pt-32 text-3xl'>Incoming Call . . .</h2>
                <audio controls autoPlay src={audio1} type="audio/ogg" loop className='text-center flex m-auto mt-10'/>
              </div>

            )}

            {
              scarmAlert === 'false' && (
                <div>
                  <h2 className='text-center pt-32 text-3xl'>Incoming Call . . .</h2>
                  <audio controls autoPlay src={audio2} type="audio/ogg" loop className='text-center flex m-auto mt-10'/>
              </div>
              )
            }


            {
              scarmAlert === '' && (
                <div className='justify-center items-center text-center pt-32'>
                  <img src={icon} alt="" className='w-3/12 flex m-auto'/>
                  <h2 className='pt-3 text-lg'>Scam Detector</h2>
                </div>
              )
            }
           

           {
              scarmAlert === 'accepted' && (
                <div className='justify-center items-center text-center pt-0'>
                  <h2 className='text-center pt-32 text-3xl'>Call Answered</h2>
                  <audio controls autoPlay src={audio3} type="audio/ogg" className='text-center flex m-auto mt-10'/>
                </div>
              )
            }

            {
              scarmAlert === 'declined' && (
                <div className='justify-center items-center text-center pt-0'>
                <h2 className='text-center pt-32 text-3xl'>Call Declined</h2>
                <audio controls autoPlay src={audio4} type="audio/ogg" className='text-center flex m-auto mt-10'/>
              </div>
              )
            }


        </div>

        <div className='flex gap-5 absolute bottom-10 left-0 right-0 px-10'>

          <button 
            onClick={handleDeclined}
            className='bg-red-600 p-3 w-10/12 
              m-auto flex text-center justify-center 
              rounded-md  hover:bg-red-500 hover:transition-all'
            >
              Decline
          </button>


          <button 
            onClick={handleCancle}
            className='bg-orange-600 p-3 w-10/12 
              m-auto flex text-center justify-center 
              rounded-md  hover:bg-orange-red-500 hover:transition-all'
            >
              Re-Start
          </button>


          <button 
            onClick={handleAccept}
            className='bg-green-600 p-3 w-10/12 
              m-auto flex text-center justify-center 
              rounded-md hover:bg-green-500 hover:transition-all'
            >
              Accept
          </button>
        </div>
    </div>
  )
}

export default PhoneTwo