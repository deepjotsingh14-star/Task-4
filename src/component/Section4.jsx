import React from "react";

const Section4 = () => {
    return (
        <div className=" py-20 font-[pop]">
            <div className="w-full flex flex-col items-center border-gray-400/30 border-2 rounded-4xl p-8 justify-center   ">
                <div className="w-full flex flex-col items-center    justify-center lg:p-8 gap-8 ">

                    {/* Subtitle */}
                    <p className="text-center text-[#9015ec] font-semibold ">
                        Open the door to forging your brand&apos;s story
                    </p>

                    {/* Main Heading */}
                    <div className="flex justify-center   flex-col items-center">
                        <div className="w-fit relative justify-center">
                            <img
                                src="/images/stars.png"
                                className="w-[5vw] rounded-full left-[-6vw]   absolute      top-[-3vw]"
                                alt="logo"
                            />
                            <h1 className="text-[3vw] font-bold text-center">
                                Embark on a Transformative Journey
                            </h1>

                        </div>
                        {/* Middle Content */}
                        <div className="flex items-center justify-center    text-center    relative">

                            <h1 className="text-[3vw] font-bold">
                                Shaping
                            </h1>

                            {/* Highlighted Text */}
                            <div className="relative w-fit">

                                {/* Yellow Background */}
                                <div className="absolute inset-0 bg-[#ffd230] rotate-2 rounded-4xl"></div>

                                {/* Foreground Text */}
                                <h1 className="relative text-[3vw] font-bold px-6 py-2 text-center">
                                    Your Brand&apos;s Destiny
                                </h1>

                            </div>

                            {/* Text Block */}
                            <p className="text-[3vw] text-center font-bold leading-tight">
                                Through Our
                            </p>

                            {/* Logo */}


                        </div>
                        <div className="flex relative    h-fit">

                            <p className="text-[3vw] text-center font-bold leading-tight">Desicated Partnership</p>
                            <img
                                src="/images/logo.png"
                                className="w-[9vw] rounded-full shadow-xl absolute  right-[-14vw] top-[-3vw]"
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div>
                        <p className=" text-center text-sm">Join us on a transforming journey to shape your brand's destiny through our
                            <br />dedicated partnership, crafting a narrative that resonates.</p>
                    </div>
                </div>

                    <div className="w-full flex text-sm justify-between border-t-2 text-gray-400 border-gray-400/30   pt-8">
                <h1 className="lg:block hidden">Van Dorafio Creativita 23, 2021 Mianno</h1>
                <div><i class="ri-instagram-line"></i>
                    <i class="ri-twitter-x-line"></i>
                    <i class="ri-linkedin-fill"></i>
                </div>
                <h1>Privacy & Cookie Policy Astratto ©2026</h1>
            </div>

            </div>
        
        </div>
    );
};

export default Section4;
