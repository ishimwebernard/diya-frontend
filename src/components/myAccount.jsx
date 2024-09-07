import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import React, {useState, useEffect} from 'react'
import ShopKeeperSide from './shop-keeper-side';
let graphicsItems = []

export default function MyAccount(){
    const [userNames, setUserNames] = useState('');
    const [children, setChildren] = useState('');
    const [principal, setPrincipal] = useState('');

useEffect(()=>{
    let graphs = []
    const getUserInfo = async()=>{
        const getActiveUser = await axios({
            method: 'post',
            url: 'http://localhost:3000/account/getUserByPhone',
            data: {
                phoneNumber: localStorage.getItem('Ago-loged-in-user')
            }
        })
        const cleanedUpUser = getActiveUser.data.userWithId
        setPrincipal(cleanedUpUser.principal)
        console.log(cleanedUpUser)
        setUserNames(cleanedUpUser.firstName + " " + cleanedUpUser.lastName)

        if (cleanedUpUser.children != null){
            let childrenArray = cleanedUpUser.children.split(',')
            
            childrenArray.forEach((element, index)=>{
                graphs.push(
                <div className='flex flex-col align-center hover:bg-gray-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p className='font-bold text-sm'>{element}</p>
                    </div>)
            })
            console.log(childrenArray)
        }
        cleanedUpUser.children == null ? setChildren(<div>
            <p className='text-sm text-gray-400'>
                You have no referrals, please share your number to get a referal!
            </p>

        </div>)
        :
        setChildren(
            <div className='flex flex-row gap-4'>
                    {graphs}
        </div>
        )
    }

    getUserInfo();
}, [])
    return (
        <div class="min-h-screen bg-gray-50/50 flex flex-row gap-0">
            <Toaster />

                   <div className='w-1/3'>
                   <ShopKeeperSide active="myaccount"/>
                   </div>
        <div class="p-4 w-full">
        <div>
                  <p className='font-extrabold text-2xl'>{userNames}</p>
                  <p>Entrance Tree</p>
                  <div className='flex flex-col justify-center w-full'>
<div className='flex flex-row  gap-4'>
<div className='flex flex-col align-center hover:bg-gray-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
<p className='font-bold text-sm'><span>PRINCIPAL: </span>{principal}</p>
                    </div>

                    <div className='flex flex-col align-center hover:bg-gray-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
<p className='font-bold text-sm'><span></span>{userNames}</p>
                    </div>
</div>
<p className='text-xl font-bold py-8'>
    Your Referrals
</p>
                    {children}
                  </div>
                </div>
        </div>
      </div>
    )
}