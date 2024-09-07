export default function ShopKeeperSide(props){
    console.log(props)
    return (
        <div className='relative bg-gray-300 h-screen w-full px-16 py-8'>
            <p className='text-sm'>Diya Shopping</p>
            <div className={props.active=="home" ? "bg-white flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100":
                "flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100"
            } >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

                <p className='text-sm font-semibold text-gray-600 '>
                    Home
                </p>
            </div>
            <div className={props.active=="orders" ? "bg-white flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100":
                "flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100"
            } >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>


                <p className='text-sm font-semibold text-gray-600 '>
                    Orders
                </p>
            </div>
            <div className={props.active=="products" ? "bg-white flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100":
                "flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100"
            } >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>


                <p className='text-sm font-semibold text-gray-600 '>
                    Products
                </p>
            </div>
            <div className={props.active=="stock" ? "bg-white flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100":
                "flex justify-start gap-2 items-center rounded-lg p-2 cursor-pointer hover:bg-gray-100"
            } >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>


                <p className='text-sm font-semibold text-gray-600 '>
                    Stock
                </p>
            </div>
        </div>
    )
}