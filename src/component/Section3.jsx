import React from 'react'

const Section3 = () => {
    return (
        <div className='lg:p-8 font-[pop] flex flex-col gap-8'>
            <div className='flex w-full justify-between items-center '>
                <h1 className='text-[3.5vw] font-bold '>Recent Projects</h1>
                <p className='w-2/5 text-sm font-semibold text-gray-400'>Step into the world of our most recent projects, a showcase
of our unwavering commitment to progressive design.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
                <div className='grid grid-rows-2 gap-8'>
                    <div className='flex flex-col gap-4 '>
                        <div className="relative w-full overflow-hidden rounded-4xl">

                            <img
                                src="https://i.pinimg.com/1200x/28/7f/65/287f6563c01dbb63b41bf54d6a6050a4.jpg"
                                className="w-full aspect-[3/2] object-cover z-0"
                                alt=""
                            />

                            <div className="absolute inset-0 w-full h-full rounded-4xl   flex flex-col p-4 justify-between z-10 overflow-hidden">

                                <div className="  overflow-hidden h-fit w-full flex justify-end ">
                                    <div className="rounded-full bg-white lg:w-[5vw]   lg:h-[5vw] w-15 h-15 justify-center items-center flex">
                                        <i className="ri-arrow-right-up-long-line  rounded-full    text-4xl  text-black ">
                                        </i>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h1 className='px-4 rounded-full font-bold bg-white  py-2   w-fit '>2D Animation</h1>
                                </div>

                            </div>



                        </div>
                        <h1 className='lg:text-[2vw] text-[5vw] text-[#8B00FF] font-bold '>The LighthouseX</h1>
                        <p className='text-gray-400'>Adding a new dimension to projects through thoughtfully designed 2D animations.</p>
                    </div>
                    <div  className='flex flex-col gap-4'>
                        <div className="relative w-full overflow-hidden rounded-4xl">

                            <img
                                src="/images/timer.png"
                                className="w-full aspect-[3/2] object-cover z-0"
                                alt=""
                            />


                               <div className="absolute inset-0 w-full h-full rounded-4xl   flex flex-col p-4 justify-between z-10 overflow-hidden">

                                <div className="  overflow-hidden h-fit w-full flex justify-end ">
                                    <div className="rounded-full bg-white lg:w-[5vw] lg:h-[5vw] w-15 h-15 justify-center items-center flex">
                                        <i className="ri-arrow-right-up-long-line  rounded-full    text-4xl  text-black ">
                                        </i>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h1 className='px-4 rounded-full font-bold bg-white  py-2   w-fit '>Motion Graphics
</h1>
                                </div>

                            </div>
                        </div>
                        <h1 className='lg:text-[2vw] text-[5vw] text-[#8B00FF] font-bold '>Navigating Possibilities</h1>
                        <p className='text-gray-400'>Motion graphics breathe life into the project, blending direction and creativity.</p>
                    </div>
        
                </div>
                <div className='grid grid-rows-2 gap-2 lg:translate-y-[4vw]'>
                    <div  className='flex flex-col gap-4'>
                        <div className="relative w-full overflow-hidden rounded-4xl">

                            <img
                                src="https://i.pinimg.com/1200x/21/ca/ad/21caadb54ba655014d24fa82dae1cb87.jpg"
                                className="w-full aspect-[3/2] object-cover z-0"
                                alt=""
                            />

     <div className="absolute inset-0 w-full h-full rounded-4xl   flex flex-col p-4 justify-between z-10 overflow-hidden">

                                <div className="  overflow-hidden h-fit w-full flex justify-end ">
                                    <div className="rounded-full bg-white lg:w-[5vw] lg:h-[5vw] w-15 h-15 justify-center items-center flex">
                                        <i className="ri-arrow-right-up-long-line  rounded-full    text-4xl  text-black ">
                                        </i>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h1 className='px-4 rounded-full font-bold bg-white  py-2   w-fit '>Visual Identity
</h1>
                                </div>

                            </div>

                        </div>
                        <h1 className='lg:text-[2vw] text-[5vw] text-[#8B00FF] font-bold '>Snowscape Heaven</h1>
                    <p className=' text-gray-400'>Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary.

</p>

                    </div>

                    <div  className='flex flex-col gap-4 '>
                        <div>
                            <div className="relative w-full overflow-hidden rounded-4xl">

                                <img
                                    src="/images/window.png"
                                    className="w-full aspect-[3/2] object-cover z-0"
                                    alt=""
                                />


                                     <div className="absolute inset-0 w-full h-full rounded-4xl   flex flex-col p-4 justify-between z-10 overflow-hidden">

                                <div className="  overflow-hidden h-fit w-full flex justify-end ">
                                    <div className="rounded-full bg-white lg:w-[5vw] lg:h-[5vw] w-15 h-15 justify-center items-center flex">
                                        <i className="ri-arrow-right-up-long-line  rounded-full    text-4xl  text-black ">
                                        </i>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h1 className='px-4 rounded-full font-bold bg-white  py-2   w-fit '> 3D Animation
</h1>
                                </div>

                            </div>

                            </div>
                        </div>
                        <h1 className='lg:text-[2vw] text-[5vw] text-[#8B00FF] font-bold '>Nocturnal Symphony</h1>
                        <p className='text-gray-400'>Through 3D artistry, we orchastrate an animated ode to the evening, a dance of shadows and dreams.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3