import React, { useState } from 'react'
import image1 from './images/default.png'
import audio1 from './images/numberScarm.mp3'
import audio2 from './images/numberVerified.mp3'
import audio3 from './images/callAnswered.mp3'
import audio4 from './images/callDeclined.mp3'
import icon from './images/freepik-export-202404231552168XXH.png'

const PhoneTwo = ({handleCancle, scarmAlert, handleAccept, handleDeclined}) => {
  const url2 = 'https://seven8nein.com/phonnart/api/report';

  let [token, setAuthTokens] = useState(()=> localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null)

  const [number, setNumber] = useState('')
  const [remark, setRemark] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [report, setReport] = useState(false)
  const handleReport = async (e) => {
    e.preventDefault();
  
    console.log('Button Clicked');
    setIsLoading(true);
  
    try {
      const response = await fetch(url2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          number: number,
          remark: remark,
        }),
      });
  
      const data = await response.json(); 
      if(data.status === 200){
        setReport(true)
        setIsLoading(false)
        console.log(data)
        document.getElementById('my_modal_3').close()
        document.getElementById('my_modal_2').showModal()
      }
  

    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      // setIsLoading(false);
    }
  };
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

        <div className='2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 grid grid-cols-2 gap-2 absolute bottom-10 left-0 right-0 lg:px-10 px-3'>

          <button 
            onClick={handleDeclined}
            className='bg-red-600 p-3 w-20 
              m-auto flex text-center justify-center 
              rounded-md  hover:bg-red-500 hover:transition-all lg:text-xs text-xs'
            >
              Decline
          </button>


          <button 
            onClick={handleCancle}
            className='bg-orange-600 p-3 w-20 
              m-auto flex text-center justify-center 
              rounded-md  hover:bg-orange-red-500 hover:transition-all lg:text-xs text-xs'
            >
              Re-Start
          </button>


          <button 
            onClick={handleAccept}
            className='bg-green-600 p-3 w-20 
              m-auto flex text-center justify-center 
              rounded-md hover:bg-green-500 hover:transition-all lg:text-xs text-xs'
            >
              Accept
          </button>


          <button 
            onClick={()=>document.getElementById('my_modal_3').showModal()}
            className='bg-red-600 p-3 w-20 
              m-auto flex text-center justify-center 
              rounded-md hover:bg-red-500 hover:transition-all lg:text-xs text-xs'
            >
              Report
          </button>
        </div>


        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-neutral-100 2xl:h-[50vh] xl:h-[80vh] lg:h-[80vh] rounded-lg ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black">✕</button>
            </form>
            <h3 className="font-bold text-lg text-black pb-3 pt-3">Report a number below!</h3>

            <form action="" onSubmit={handleReport}>
              <div className='flex flex-col gap-3'>
                <input type="text" required onChange={(e)=>setNumber(e.target.value)} value={number} placeholder='Number to report: ' className=' text-xs block w-full text-black bg-white border border-neutral-500 p-5 rounded-lg outline-none '/>
                <textarea type="text" required onChange={(e)=>setRemark(e.target.value)} value={remark} placeholder='Number to report: ' className=' text-xs block w-full text-black bg-white border max-h-40 min-h-40 border-neutral-500 p-3 rounded-lg outline-none '/>
                <button className='bg-black py-3 border-none rounded-lg text-xs'>Report Now</button>
              </div>
            </form>
          </div>
        </dialog>


        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-neutral-100 2xl:h-[30vh] xl:h-[40vh] lg:h-[40vh] rounded-lg ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black">✕</button>
            </form>
            <h3 className="font-bold text-lg text-black pb-3 text-center flex m-auto items-center justify-center pt-10">Number Successfully <br /> Reported</h3>

          </div>
        </dialog>
    </div>
  )
} 

export default PhoneTwo