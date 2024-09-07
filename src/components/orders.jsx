import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import React, {useState, useEffect} from 'react'
import ShopKeeperSide from './shop-keeper-side';
let graphicsItems = []

export default function Products(){
    const [graphicsItems,setGraphicsItems] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [ItemName, setItemName] = useState('')
    const [Category, setCategory] = useState('')
    const [CostPrice, setCostPrice] = useState('')
    const [SellingPrice, setSellingPrice] = useState('')

 useEffect(()=>{
        async function Populatediv(){
            let internalGraphics = []
            const dataresults = await axios({
                medivod:'get',
                url: 'http://localhost:3000/orders/getAllOrders'
            })
            console.log(dataresults)
            let wholeData = dataresults.data.data
            wholeData.forEach(element => {
              let itemGraphics = []
              let items = JSON.parse("{"+element.Items.replace(/@/g, '"').replace(/\s+/g, '')+"}").items
              items.forEach((itemElement, itemIndex)=>{
                itemGraphics.push(<p className='italic'>{itemElement.product_id}: {itemElement.quantity} PCS X {itemElement.unit_price} = {itemElement.subtotal}</p>)
              })
            

                internalGraphics.push(
                  <div className="bg-gray-100 custom-grid w-full w-full divide-x p-2 cursor-pointer hover:bg-white">
                  <div className=" text-sm">
                  {element.ClientId}
                  </div>
                  <div className=" text-sm">
                  {element.createdAt}
                  </div>
                  <div className=" text-sm  flex justify-center">
                  {element.Status == 1 ? <div>
                    
                  </div>:<></>     }
                  </div>
                  <div className=" text-sm ">
                  {element.Price}
                  </div>
                  <div className=" text-sm">
                  {itemGraphics}
                  </div>
              </div>
                )
            });
            console.log(dataresults.data)
            setGraphicsItems(internalGraphics)
        }


        Populatediv()
    },[])


    return (
        <div class="min-h-screen bg-gray-50/50 flex flex-row gap-0">
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
                            medivod: 'post',
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
                   <div className='w-1/3'>
                   <ShopKeeperSide active="orders"/>
                   </div>
        <div class="p-4 w-full">

            <div className='flex flex-col w-full'>
                <div>
                  <p className='font-extrabold text-2xl'>Orders</p>
                  <p className='text-sm text-gray-400'>It allows them to manage and track order statuses, view detailed information for each order (such as customer details, payment, and shipping information), and take actions like updating order statuses, processing refunds, or canceling orders. The interface typically includes filtering options to search by date, status, or customer, making it easy to monitor and manage the flow of orders efficiently.</p>
                </div>
                <div class="rounded-s-sm mt-3 bg-red-400 w-full">
                    <div className="bg-gray-600 custom-grid w-full w-full divide-x p-2">
                        <div className="font-bold  text-sm text-white">
                        ClientID
                        </div>
                        <div className="font-bold  text-sm text-white">
                        Date
                        </div>
                        <div className="font-bold text-sm text-white">
                        Status
                        </div>
                        <div className="font-bold text-sm text-white">
                        Total Amount
                        </div>
                        <div className="font-bold text-sm text-white">
                        Items
                        </div>
                    </div>
                   
                        {graphicsItems}
                  
               
                </div>
            </div>
        </div>
      </div>
    )
}