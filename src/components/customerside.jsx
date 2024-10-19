import { Link } from 'react-router-dom';


export default function CustomerSide(props){
    console.log(props)
    return (
        <div className='relative bg-gray-300 h-screen w-full px-16 py-8'>
            <p className='text-2xl'>Ago <span className='font-extrabold text-4xl'>Shopping</span></p>
            <div className='mt-8'></div>
            <div className={props.active=="orders" ? "bg-white flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100":
                "flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100"
            } >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>

            <Link to="/customer/orders"> 
                 <p className='text-sm font-semibold text-gray-600 '>
                    My Orders
                </p>
            </Link>
           
            </div>

            <div className={props.active=="myaccount" ? "bg-white flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100":
                "flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100"
            } >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>


            <Link to="/customer/profile">
             <p className='text-sm font-semibold text-gray-600 '>
                    My Account
                </p>
            </Link>
               
            </div>

            
            <div className="flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100"
             onClick={()=>{
                localStorage.removeItem("Ago-loged-in-user")
                window.location.href='/'
             }}
             
             >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
</svg>



      
             <p className='text-sm font-semibold text-gray-600 '>
                    Log Out
                </p>
     
               
            </div>
        </div>
    )
}