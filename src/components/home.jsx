import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../App.css'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Products', href: 'products' },
    { name: 'Company', href: '#' },
  ]


export default function Home(){
  
  useEffect(()=>{
    async function PopulateTable(){
        let internalGraphics = []
        const dataresults = await axios({
            method:'get',
            url: 'http://localhost:3000/product/getAllOrders'
        })
        let wholeData = dataresults.data
        wholeData.forEach((element, index) => {
            internalGraphics.push(
            <div className='aspect-h-1 aspect-w-1 cursor-pointer rounded-md p-2 hover:bg-gray-200' id={index}>
              <img src="https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg" className='w-full'/>
              <div className='flex justify-between'>
                <p className='mt-1 text-md text-gray-500'>{element.ItemName}</p>
                <p className='text-md font-medium text-gray-900'>Rwf {element.SellingPrice}</p>
              </div>
              <p className='italic'>{element.Category}</p>
            <div className='flex justify-center gap-2 m-2'>
              <p className='p-2 bg-green-800 font-bold rounded-md text-white w-1/3 text-center'>Edit</p>
              <p className='p-2 bg-red-800 font-bold rounded-md text-white w-1/3 text-center' onClick={()=>{
                setToDelete(element)
                setAlertModal(true)
              }}>Delete</p>
            </div>
            </div>
            )
        });
        console.log(dataresults.data)
        setGraphicsItems(internalGraphics)
    }


    PopulateTable()
},[])

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50 font-roboto">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
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
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
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


      </div>
    )
}
