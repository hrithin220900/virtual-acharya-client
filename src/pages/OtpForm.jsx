import React, { useRef, useState } from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { SERVER } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { auth } from '../firebase';

const OtpForm = () => {

    const [optSent, setOtpSent] = useState(false)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const navigate = useNavigate()

    const otpRef = useRef()
    const phoneRef = useRef()
    const nameRef = useRef()

    const verifyCaptcha = () => {
      if(!window.recaptchaVerifier){
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
            handleSendOtp();
          },
          'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        }, auth);
      }
    }

    const handleSendOtp = async(e) => {

      e.preventDefault()

      verifyCaptcha();

      const appVerifier = window.recaptchaVerifier;
      const phoneNumber = "+91"+phoneRef.current.value;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        toast.success(`OTP was sent to mobile number ${phoneRef.current.value}`, {duration:5000})
        setOtpSent(true)
        // submit the request to signup to server
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        setOtpSent(false)
      });
    }   

    const handleSubmit = (e) => {
      e.preventDefault()
      window.confirmationResult
      .confirm(otpRef.current.value)
      .then(async () => {
        try {
          await axios.post(`${SERVER}/auth/signup`,{
            name:name,
            phone:phone,
            password:otpRef.current.value,
          })
          toast.success("You have successfully been registered", {duration:5000})
          setTimeout(() => navigate("/login"), 1000)
        } catch (err) {
          toast.error(err.response.data, {duration:5000})
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error("Error validating OTP",{duration: 3000})
      })
    }

  return (
    <div>
        <Toaster position='top-center' />
        <div id="recaptcha-container"></div>
        <h1 className='font-bold my-5'>Virtual Aacharya</h1>
        <h3 className='my-5'>{optSent ? "Enter 6-digit OTP sent to your mobile number" : "Enter your mobile number to verify your identity"}</h3>
        <form className='flex flex-col'>
            {!optSent && <input onChange={(e) => setName(e.target.value)} className='bg-white p-5 rounded-lg border-2 text-black border-gray-400 mb-5' type="text" ref={nameRef} required placeholder="Enter Your Name" />}
            {optSent && <input className='bg-white p-5 rounded-lg border-2 text-black border-gray-400 mb-5' type="text" ref={otpRef} required placeholder="Enter OTP" />}
            {!optSent && <input onChange={(e) => setPhone(e.target.value)} ref={phoneRef} type="text" className='bg-white p-5 rounded-lg border-2 text-black border-gray-400 mb-5' required placeholder='Enter Mobile Number' />}
            {optSent ? <button className='p-3 rounded-lg' onClick={handleSubmit}>Verify Mobile Number</button> : <button className='p-3 rounded-lg' id="sign-in-button" onClick={handleSendOtp}>Send OTP</button>}
        </form>
    </div>
  )
}

export default OtpForm