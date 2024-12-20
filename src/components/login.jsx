
import axios from 'axios'
import React, {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Logo from '../assets/logo11.png'

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('')
    return (
      <>
        <Toaster />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Ago"
              src="https://res.cloudinary.com/bn47/image/upload/v1731163688/ago-mono-logo_oe934b.png"
              className="mx-auto h-16 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input onChange={(e)=>{
                    setPhoneNumber(e.target.value)
                  }}
                    id="phone"
                    name="phone"
                    type="phone"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  onClick={async()=>{
                    try{

                      const signIn = await axios({
                        method: 'post',
                        data: {phoneNumber, password},
                        url: 'http://localhost:3000/account/login'
                      })
                      console.log(signIn)
                      toast.success('Succesfully Logged in')
                      console.log(signIn)
                      if (signIn.data.role == 1)
                      {
                        localStorage.setItem('Ago-loged-in-user', phoneNumber)
                        window.location.href='/';
                      }
                      else if(signIn.data.role === 2){
                        localStorage.setItem('Ago-loged-in-user-manager', phoneNumber)
                        window.location.href='/products'
                        console.log("Manager")
                      }
  
                    }catch(error){
                      console.log(error)
                      if(error.response.data.message){
                           toast.error(error.response.data.message)
                      }
                    }
                  }}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </div>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </>
    )
}
  