import React from 'react'

const Nav_Bar = () => {
    return (
        <div className='w-full  flex justify-center items-center   '>
            <div className='border-b-2 border-gray-400/30 items-center flex py-6    lg:justify-between w-full'>
            <div className='lg:block hidden '>
            <div className='flex font-[pop] text-sm gap-8 items-center' >
                <a href="#">Services</a>
                <a href="#">Work</a>
                <a href="#">About</a>
            </div></div>
            <div className='font-[popbold] flex gap-4 justify-center text-2xl' >     
                <img src="/images/img1.png" className='h-8 w-8' alt="" />    
                <h1>Astratto</h1>
            </div>
           <div className='hidden lg:block'>
             <div className='flex font-[pop] justify-center items-center text-sm gap-8'>
                <a href="">Careers</a>
                <a href="">Contact US</a>
            </div>
           </div>
        </div></div>
    )
}

export default Nav_Bar