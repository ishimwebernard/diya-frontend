import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import React, {useState, useEffect} from 'react'
import CustomerSide from './customerside';
let graphicsItems = []

export default function CustomerOrders(){
    const [userNames, setUserNames] = useState('');
    const [children, setChildren] = useState('');
    const [principal, setPrincipal] = useState('');

    useEffect(()=>{
        async function Populatediv(){

            let localSto = localStorage.getItem('Ago-loged-in-user');
            console.log(localSto)
            // Get the active user with localstorage
            if (localSto){
                const userDetails = await axios({
                  method: 'post',
                  url: 'http://localhost:3000/account/getuserbyphone',
                  data: {
                    phoneNumber: localSto
                  }
                })
            }

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
              })});
            console.log(dataresults.data)
            setGraphicsItems(internalGraphics)
        }


        Populatediv()
    },[])


    return (
        <div class="min-h-screen bg-gray-50/50 flex flex-row gap-0">
            <Toaster />

                   <div className='w-1/3'>
                   <CustomerSide active="orders"/>
                   </div>
        <div class="p-4 w-full">

            <p>Customer Orders</p>
        </div>
      </div>
    )
}