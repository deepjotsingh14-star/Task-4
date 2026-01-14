import React from 'react'

const Section2 = () => {
    return (
        <div className='lg:px-8 py-8 lg:border-gray-400/30 lg:border-2 rounded-[5vw] gap-8 flex-col flex font-[pop]'>
            <div className='w-full flex justify-between p-4 items-center font-[pop]'>
                <h1 className='font-bold text-4xl'>Our Services</h1>
                <p className='font-semibold text-sm hidden lg:block text-gray-500'>Discover a wide range of oppurtunities through <br /> a Comprehensive range of qualified range</p>
            </div>
            <div className='w-full flex gap-2 flex-col'>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
                    <div className='p-4 border-3 border-[#a790cb]  rounded-4xl flex flex-col gap-4'>
                        <div >
                            <div className='border-b p-2 w-full flex justify-between items-center'><h1 className='font-bold text-4xl'>Motion <br /> Graphics</h1>
                                <div className=" bottom-0 rounded-full z-100">
                                    <i className=" ri-arrow-right-up-long-line font-extralight border  lg:text-[3vw] text-[10vw] lg:p-[1vw] p-[2vw] text-white  bg-[#8B00FF] rounded-full"></i>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-500'>Bring your ideas to life through dyanamic
                            visuals and enganging animations.
                        </p>
                        <img src="https://i.pinimg.com/1200x/14/bb/79/14bb792f746e56d3000de5bb3dea459d.jpg" className='aspect-3/2 rounded-2xl w-full object-cover' alt="" />
                    </div>
                    <div className='  relative text-white   ' >
                        <div className='p-4  relative border flex flex-col gap-4 rounded-tr-4xl rounded-tl-4xl rounded-br-4xl  lg:rounded-bl-[17vw] rounded-bl-[49vw]    bg-[#8B00FF] '>
                            <div className='border-b p-2'><h1 className='font-bold text-4xl'>2D/3D <br /> Animations</h1></div>
                            <p >Turn imagination into  really with our  stunning 2D/3D animations</p>
                            <img src="https://i.pinimg.com/1200x/ef/f7/ad/eff7ad1e10312b33568e87a1d5a5955b.jpg" className='aspect-3/2 w-full box-content object-cover rounded-tr-2xl rounded-br-2xl rounded-tl-2xl lg:rounded-bl-[16vw] rounded-bl-[46vw]' alt="" />

                            <div className="absolute  bottom-3     rounded-full        z-100">
                                <i className=" ri-arrow-right-up-long-line font-extralight border text-[#8B00FF] lg:text-[4vw] text-[10vw] lg:p-[2vw] p-[5vw]  bg-white border-4 border-[#8B00FF] rounded-full"></i>
                            </div>
                        </div>

                    </div>
                    <div className='p-4  border-3 border-[#a790cb]  rounded-4xl flex flex-col gap-4'>
                        <div className='border-b flex  justify-between items-center p-2'><h1 className='font-bold text-4xl'>visual <br /> Identity </h1>
                            <div className="   bottom-0     rounded-full        z-100">
                                <i className=" ri-arrow-right-up-long-line font-extralight border  lg:text-[3vw] text-[10vw] lg:p-[1vw] p-[2vw] text-white  bg-[#8B00FF] rounded-full"></i>
                            </div>

                        </div>
                        <p className='text-gray-500'>shape a unique brand persona  through  our  Comprehensive visual identity  solutions </p>
                        <img src="https://i.pinimg.com/1200x/99/fa/99/99fa99a2cc251d7f25e0e895a31ac8d5.jpg" className='aspect-3/2 rounded-2xl    w-full object-cover' alt="" />
                    </div>

                </div>
                <div className='w-full flex justify-between'>
                    <div className='text-[2vw]'>

                        <i class="ri-arrow-left-line text-gray-400"></i> <i class="ri-arrow-right-line"></i>
                    </div>
                    <div className="flex items-center gap-2  ">
                        <span className="border w-14 bg-black"></span>
                        <span className="border w-7 border-gray-400"></span>
                        <span className="border w-7 border-gray-400"></span>
                        <span className="border w-7 border-gray-400"></span>  <span className="border w-7 border-gray-400"></span>  <span className="border w-7 border-gray-400"></span>
                    </div>


                </div>
            </div>
            <div className='w-full   border-gray-500 border rounded-4xl flex-col justify-center items-center'>
                <div className='w-full flex p-4 justify-center'>
                    <h4 className='text-xl flex items-center text-gray-400 gap-2 '><span className='w-8 h-0 border'></span>ABOUT ASTRATTO</h4>
                </div>
                <div>
                    <div className='w-full gap-2 text-center text-[3vw] justify-center flex items-end'>
                        <img src="/images/chaat.png" className='w-[7vw]  ' alt="" />Our <span className='text-gray-400'>visionar</span> <span className='text-[#fa611d]'>artisans</span>  collaborate
                    </div>
                    <div className='flex text-[3vw] justify-center w-full gap-1'>
                        <p>seamlessly to craft  </p>
                        <img src="/images/img1.png" className='lg:w-16 w-4 h-4 lg:h-16 ' alt="" />
                        <p>inspiring experiences,</p>
                    </div>
                    <p className='text-center text-[3vw]'> <span className='text-[#fa611d]' >leaving</span> leaving lasting imprints on brands <br />   </p>
                    <div className='flex text-[3vw] justify-center w-full gap-'>
                        <p>and space.</p>
                        <img src="/images/Star.png" className='lg:w-16 w-7 relative top-[1vw] left-[3vw]' alt="" />
                    </div>
                    <div className='w-full flex  '>
                        <img src="/images/thread.png"  className='w-[35vw] relative left-[10vw] top-[-2vw] rotate-10' alt="" />
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default Section2