import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Products', href: 'products' },
    { name: 'Company', href: '#' },
    { name: 'Shopping Cart', href: 'cart'}
  ]
const ProductSet = function({element, index}){
  const [myText, setMyText] = useState('Add To Cart')

  return (
    <div className='aspect-h-1 aspect-w-1 cursor-pointer rounded-md p-2 hover:bg-gray-200' id={index}>
    <img src={element.Picture == 'none' ? "https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg":element.Picture} className='w-full aspect-square'/>
    <div className='flex justify-between'>
      <p className='mt-1 text-md text-gray-500'>{element.ItemName}</p>
      <p className='text-md font-medium text-gray-900'>Rwf {element.SellingPrice}</p>
    </div>
    <p className='italic'>{element.Category}</p>
    <div className='flex justify-center px-2 py-4 bg-gray-300' onClick={async()=>{
      setMyText("Added to Cart")
      let existingCart = localStorage.getItem('mycart')
      if (existingCart == "" || existingCart== null){
        existingCart = "[" + "{\"ItemName\":" +"\"" + element.ItemName +"\""+ ",\"Price\":" +element.SellingPrice + "}]"
      }else{
          existingCart.replaceAll("]","")
          existingCart = existingCart.slice(0,-1) + ",{\"ItemName\":" +"\"" + element.ItemName +"\"" + ",\"Price\":"+element.SellingPrice+"}]"
      }
      localStorage.setItem('mycart', existingCart)
    }}>
      <p className='text-gray-800 font-semibold text-sm' onClick={()=>{

      }}>
        {myText}
      </p>
    </div>
  </div>
  )
}

export default function Home(){
  const [graphicsItems,setGraphicsItems] = useState([])
  const [alertModal, setAlertModal] = useState(false)
  const [userActive, setUserActive] = useState('nothing')
  const [cartText, setCartText] = useState('')
  const [toshow, setToShow] = useState(
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
      Log in <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
  )
  const addToCart = () => {
    console.log(userActive)
    if (userActive == 'nothing'){
      setAlertModal(true)
    }
  }

  useEffect(()=>{
    async function PopulateTable(){
      let localSto = localStorage.getItem('Ago-loged-in-user');
      console.log(localSto)
      setUserActive(localSto)

      // Get the active user with localstorage
      if (localSto){
          const userDetails = await axios({
            method: 'post',
            url: 'http://localhost:3000/account/getuserbyphone',
            data: {
              phoneNumber: localSto
            }
          })
          console.log(userDetails)
                setToShow(
                  <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    <Link to="/customer/profile">
<div className='flex flex-row cursor-pointer flex-wrap w-auto p-2 hover:bg-gray-400 '>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
<path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg>
        </div>
        <p className='font-bold text-sm'>{userDetails.data.userWithId.firstName} {userDetails.data.userWithId.lastName}</p>
      </div>
</Link>
                  </div>)

      }
        let internalGraphics = []
        const dataresults = await axios({
            method:'get',
            url: 'http://localhost:3000/product/getAllOrders'
        })
        let wholeData = dataresults.data
        wholeData.forEach((element, index) => {
            internalGraphics.push(
              <ProductSet element={element}/>
            )
        });
        console.log(dataresults.data)
        setGraphicsItems(internalGraphics)
    }

    localStorage.setItem('mycart', "")
    PopulateTable()
},[])

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
          {alertModal ? <>
            <div className="w-screen h-screen bg-gray-400 z-10 absolute p-12 items-center bg-opacity-50 flex justify-center">
              <div className='bg-white rounded-xl p-4 flex flex-col gap-4'>
                <p>Please login to add to cart</p>
                <div className='flex flex-row justify-end gap-2 '>
                  <p className='p-2 bg-slate-300 rounded-md font-bold cursor-pointer' onClick={()=>{
                    setAlertModal(false)
                  }}>Cancel</p>
                  <Link to='/login'>
                  <p className='p-2 bg-red-600 rounded-md font-bold cursor-pointer text-white'>Login</p>
                  </Link>
               
                </div>
              </div>
            </div>
            </>: <></>}
        <header className=" inset-x-0 top-0 z-50 font-roboto">

          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://res.cloudinary.com/bn47/image/upload/v1731163688/ago-mono-logo_oe934b.png"
                  className="h-16 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
         {toshow}
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <section className="w-screen h-screen bg-[url('https://res.cloudinary.com/bn47/image/upload/v1731153180/nunu_sjf2bc.png')]">
                <div className='bg-gray-800/50 w-full h-full flex flex-col justify-center items-left px-12'>
                    <p className='text-6xl font-bold text-gray-200'>
                      Shop together with confidence!
                    </p>
                    <div className='w-1/2 '>
                    <p className='text-sm text-gray-100'>
                      Earn while you spend! Yes, with Ago shopping you can get profit from your colleagues and get the chance of getting a loan from the shop.
                    </p>
                    <p className='p-4 font-bold leading-tight mt-6 bg-gray-200 text-gray-800 w-fit'>
                    <a href="/login" >Get Started</a> 
                    </p>
                    </div>
                </div>
        </section>
        <div className='flex flex-col w-full justify-center items-center'>
        <div class="rounded-sm mt-3 grid grid-cols-4 gap-2 w-3/4">
          {graphicsItems}
      </div>

        </div>

      </div>
    )
}
