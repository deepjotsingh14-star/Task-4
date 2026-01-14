import React from 'react'
import Nav from "./Nav_bar.jsx";
const Hero_Section = () => {
    return (
        <div className='flex  lg:px-8  flex-col  pb-15 overflow-hidden'>
            <Nav />
            <div className='w-full py-[3vw] flex flex-col-reverse lg:inline relative  font-[pop]  '>

                <div className='lg:absolute gap-2 text-[3vw] lg:text-[1.2vw]   flex flex-col text-white right-0  w-full items-end  '>
                    <h1 className='px-4 py-2 bg-[#9015ec]   rounded-full w-fit'>Via della Creativita. 23</h1>
                    <h1 className='px-4 py-2 bg-[#9015ec] rounded-full w-fit'>20121 Mitano</h1>
                </div>

                <div className='flex flex-col gap-9 lg:gap-0'>
                    <div className='flex  justify-center  items-center flex-col     w-full'>
                        <h1 className='font-semibold text-gray-400'>Igniting the Spark of Inspiration</h1>


                        {/* TOP SECTION */}



                    </div>
                    <div className="flex justify-center">
                        <div className="w-fit relative flex flex-col gap-1 lg:text-[6vw] text-[8vw] font-bold justify-center items-center">

                            {/* TEXT CONTENT */}
                            <div className="w-fit flex flex-col relative z-20 justify-center items-center">
                                <p>Unleash Your</p>

                                <div className="flex items-center gap-[1vw]">
                                    <p>Brand</p>
                                    <img src="/images/img2.png" className="w-[7vw]" alt="" />
                                    <p>with Our</p>
                                </div>

                                <div className="relative flex justify-evenly w-fit gap-[1vw]">
                                    <p>Magico Design</p>
                                </div>
                            </div>

                            {/* BACKGROUND IMAGES */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <div className="w-full">
                                    <div className="relative   h-[25vw] lg:left-[-15vw] left-[-10vw] w-[17vw] rotate-[-10deg] rounded-b-full overflow-hidden">
                                        <img
                                            src="/images/baloon.png"
                                            className="h-full w-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex justify-end">
                                    <div className="relative   h-[20vw] w-[17vw] rotate-[10deg] lg:right-[-15vw] right-[-10vw] top-[-8vw]   overflow-hidden">
                                        <img
                                            src="/images/houses.png"
                                            className="h-full w-full object-cover"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex w-full borde relative  items-center">

                        <div className="  py-4">
                            <div className="flex gap-1 rotate-[-10deg]">
                                <p className="lg:text-[1.5vw] text-[2vw] lg:h-[5vw] h-[7vw] border border-[#fc7828] lg:px-8 px-4 flex justify-center items-center rounded-full  font-bold">
                                    Create magic
                                </p>
                                <div className="lg:w-[5vw] bg-[#7a25c8] w-[7vw] lg:h-[5vw] h-[7vw] rounded-full border"></div>
                            </div>
                        </div>

                        <div   >
                            <img src="/images/thread.png" className="w-1/2   absolute  rotate-[-10deg] top-[-5vw] right-0" alt="" />
                        </div>

                    </div>

                </div>

            </div >



        </div >
    )
}

export default Hero_Section