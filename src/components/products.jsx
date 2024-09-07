import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import React, {useState, useEffect} from 'react'
import ShopKeeperSide from './shop-keeper-side';
let graphicsItems = []

export default function Products(){
    const [graphicsItems,setGraphicsItems] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [alertModal, setAlertModal] = useState(false)
    const [ItemName, setItemName] = useState('')
    const [Category, setCategory] = useState('')
    const [CostPrice, setCostPrice] = useState('')
    const [SellingPrice, setSellingPrice] = useState('')
    const [toDelete, setToDelete] = useState({ItemName: 'None'})

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


    return (
        <div class="h-screen bg-red-100 flex flex-row gap-0">
            <Toaster />
         {  !modalVisible ? <></>: <div className="w-screen h-screen bg-gray-400 z-10 absolute p-12 items-center bg-opacity-50">
                <div className="bg-gray-100 w-1/2 h-full m-auto p-6 h-3/4">
                <p className="font-bold text-md">Add New Product</p>
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name
                </label>
                <div className="mt-2">
                  <input onChange={(e)=>{
                    setItemName(e.target.value)
                  }}
                 
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Cost Price
                </label>
                <div className="mt-2">
                  <input onChange={(e)=>{
                    setCostPrice(e.target.value)
                  }}
                 
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Selling Price
                </label>
                <div className="mt-2">
                  <input onChange={(e)=>{
                    setSellingPrice(e.target.value)
                  }}
                 
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <div className="mt-2">
                  <input onChange={(e)=>{

                    setCategory(e.target.value)
                  }}
                 
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button onClick={async()=>{
                    try{
                        const result = await axios({
                            method: 'post',
                            url: 'http://localhost:3000/product/create',
                            data: {
                                    ItemName,Category,CostPrice,SellingPrice, Picture: 'none'
                            }
                        })
                        
                        setModalVisible(false)
                        toast.success('Product added succesfully')
                    }catch(error){
                        console.log(error)
                        setModalVisible(false)
                        toast.error('Could not add product')
                    }
                    }} className="mt-8 rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>

                </div>
            </div>}

            {alertModal ? <>
            <div className="w-screen h-screen bg-gray-400 z-10 absolute p-12 items-center bg-opacity-50 flex justify-center">
              <div className='bg-white rounded-xl p-4 flex flex-col gap-4'>
                <p>Are you sure you want to delete this product?</p>
                <p>{toDelete.ItemName}</p>
                <div className='flex flex-row justify-end gap-2 '>
                  <p className='p-2 bg-slate-300 rounded-md font-bold cursor-pointer' onClick={()=>{
                    setAlertModal(false)
                  }}>Cancel</p>
                  <p className='p-2 bg-red-600 rounded-md font-bold cursor-pointer text-white' onClick={async()=>{
                     try{
                      const response = await axios({
                        url: 'http://localhost:3000/product/delete',
                        method: 'post',
                        data: {
                          id: toDelete.id
                        }
                      })
                      toast.success('Succesfully deleted ')
                      setTimeout(() => {
                        window.location.reload()
                      }, 3000);
                     }catch(error){

                     }
                  }}>Delete</p>
                </div>
              </div>
            </div>
            </>: <></>}
            <div className='w-1/3'>
<ShopKeeperSide active="home"/>

            </div>
          
        <div class="p-4 bg-gray-100 h-screen w-2/3  ">
            <div>
            </div>
            <div>
                <div>
                    <button onClick={()=>{
                        setModalVisible(!modalVisible)
                    }} className="rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
                </div>
                <table class="rounded-sm mt-3 grid grid-cols-4 gap-2">

                        {graphicsItems}
                  
               
                </table>
            </div>
        </div>
      </div>
    )
}
