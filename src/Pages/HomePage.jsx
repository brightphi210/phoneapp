import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";
// import imagesh from './images/screen.png'
import imagesh from '../Components/images/screen.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='w-full'>

        <div className='bg-black p-5 flex  2xl:px-[25rem] px-5 text-white w-full fixed z-50'>
            <h2 className='2xl:text-xl text-sm font-bold'>PHONEART</h2>

            <ul className='flex ml-auto 2xl:gap-10 gap-3'>
              <Link to={'/login'}>
                <li className='border-b border-b-neutral-600 pb-2 cursor-pointer text-xs'>Login</li>
              </Link>

              <Link to={'/register'}>
                <li className='border-b border-b-neutral-600 pb-2 cursor-pointer text-xs'>Register</li>
              </Link>
            </ul>
        </div>

        <div className='myBg justify-center items-center flex pt-20 px-5'>
          <div className='isolate'>
            <h2 className='text-center 2xl:text-6xl text-3xl font-bold text-white'>Phone Call Fraud <br /> Detection</h2>
            <p className='text-center text-white pt-5 2xl:text-lg text-xs'>
              Verify a person’s identity with passive voice biometrics 
              when they reach out <br className='2xl:block xl:block lg:block hidden'/> to  your organization over the phone and detect 
              fraudsters attempting to <br className='2xl:block xl:block lg:block hidden'/> access customer accounts and internal data.
            </p>
          </div>
        </div>
      

      <div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col py-20 2xl:px-[25rem] xl:px-[10rem] lg:px-[10rem] px-5 gap-10'>
        <div className='w-full text-center'>
          <p className='text-6xl text-center flex justify-center text-orange-500'><AiOutlineSafety /></p>
          <h2 className='text-xl py-5 font-semibold'>Improved Account Security</h2>
          <p className='text-sm 2xl:text-sm xl:text-xs lg:text-xs'>
            Detect fraudulent calls with continuous voice biometric  verification
             of a caller’s voice running in the background of a call and  
             stop imposters from accessing someone else’s account.
          </p>
        </div>

        <div className='w-full text-center'>
          <p className='text-6xl text-center flex justify-center text-orange-500'><AiOutlineSafety /></p>
          <h2 className='text-xl py-5 font-semibold'>Improved Account Security</h2>
          <p className='text-sm 2xl:text-sm xl:text-xs lg:text-xs'>
            Detect fraudulent calls with continuous voice biometric  verification
             of a caller’s voice running in the background of a call and  
             stop imposters from accessing someone else’s account.
          </p>
        </div>


        <div className='w-full text-center'>
          <p className='text-6xl text-center flex justify-center text-orange-500'><AiOutlineSafety /></p>
          <h2 className='text-xl py-5 font-semibold'>Improved Account Security</h2>
          <p className='text-sm 2xl:text-sm xl:text-xs lg:text-xs'>
              Detect fraudulent calls with continuous voice biometric  verification
              of a caller’s voice running in the background of a call and  
             stop imposters from accessing someone else’s account.
          </p>
        </div>
      </div>


      <div className='2xl:px-[25rem] px-5 bg-neutral-200 py-20 text-center'>
        <h2 className='text-3xl font-bold pb-3'>Voice Is a Unique and Natural Part of Every Conversation</h2>
        <p className='pt-5 text-sm leading-loose'>
          With cybercrime on the rise and social engineering’s increasingly 
          sophisticated methods for stealing individuals’ digital identity, 
          the necessity for highly secure, extremely fast, and convenient 
          verification of a person’s identity is indisputable. In the case of 
          attempted phone fraud, the unique identifier of a caller’s identity 
          that is always present during every conversation is the human voice. 
          Because of that, passive voice biometric verification is the perfect 
          solution for the detection of imposters in real-time.
        </p>
      </div>

      <div className='2xl:px-[25rem] px-5 text-center pt-20'>
        <h2 className='text-3xl font-bold pb-3'>Get Your Free Online Demo</h2>
        <button className='bg-orange-500 text-white px-10 py-3 mb-5 rounded-lg'>Click to test</button>
        <img src={imagesh} className='rounded-xl' alt="" />
      </div>



      <div className='flex 2xl:flex-row xl:flex-row lg:flex-row flex-col 2xl:px-[25rem] xl:px-[10rem] lg:px-[10rem] px-5 gap-20 pt-20'>

        <div>
          <div className="pb-10">
            <h2 className='text-2xl font-semibold pb-5'>Passive Voice Biometric Verification</h2>

            <p className='text-sm leading-loose'>
              With Speaker Identification technology, your contact centers can verify 
              customers seamlessly over the phone based on their free speech. Passive 
              voice biometric verification runs automatically in the call’s background 
              and verifies a person’s voice as fast as in 3 seconds of free speech with 
              over 96% accuracy out of the box (tested on a real bank's contact center data).
            </p>
          </div>


          <div className="pb-10">
            <h2 className='text-2xl font-semibold pb-5'>Voice as a Password</h2>

            <p className='text-sm leading-loose'>
              Two-factor authentication is no longer sufficient to keep 
              fraudsters away from customer accounts, as passwords can be 
              discovered and smartphones stolen. However, if a person’s voice 
              is verified with passive voice biometrics through free speech, a 
              complex biometric factor is added to the authentication, significantly 
              reducing the success of attempted phone fraud.
            </p>
          </div>
        </div>


        <div>
          <div className="pb-10">
            <h2 className='text-2xl font-semibold pb-5'>Identity Change Detection</h2>

            <p className='text-sm leading-loose'>
              Fraudulent behavior does not happen only at the beginning of a phone call. 
              Sometimes a customer could be forced to verify themselves at the beginning of a 
              call while a fraudster continues the conversation later on. For this reason, 
              Phonexia’s passive voice biometric verification can verify a caller’s voice 
              continuously in the background of a call and detect such situations instantly.
            </p>
          </div>


          <div className="pb-10">
            <h2 className='text-2xl font-semibold pb-5'>Seamless Authentication</h2>

            <p className='text-sm leading-loose'>
              Excellent customer experience is driven by intuitive behavior. 
              The beauty of Speaker Identification is in its natural balance 
              between simplicity and security. Not only don't your customers need 
              to remember additional passwords, but they also don’t have to worry 
              about other authentication devices—their voice is all they need for 
              secure authentication.
            </p>
          </div>
        </div>

      </div>


      <footer className='bg-black 2xl:px-[25rem] px-5 text-white p-20 flex 2xl:flex-row flex-col justify-between gap-10'>
        <div className=''>
          <h2>PHONEART</h2>
        </div>

        <div className=''>
          <p className='text-orange-500 pb-5'>Partners</p>
          <h2 className='text-sm pb-3'>Become a Partner</h2>
        </div>


        <div className=''>
          <p className='text-orange-500 pb-5'>Legal</p>
          <h2 className='text-sm pb-3'>Privacy Policy</h2>
          <h2 className='text-sm pb-3'>Terms and condition</h2>
          <h2 className='text-sm pb-3'>Ethics Line</h2>
        </div>


        <div className=''>
          <p className='text-orange-500 pb-5'>Company</p>
          <h2 className='text-sm pb-3'>Contact</h2>
          <h2 className='text-sm pb-3'>Career</h2>
          <h2 className='text-sm pb-3'>Blog</h2>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
