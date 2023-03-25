import React from 'react';
import Image from "next/image";
import Exploreour from "@/app/home/components/exploreour/exploreour";

const home = () => {
    return (
        <>
            <div className="relative">
                <Image priority={true} width="1000" height="500"
                       className="h-[40rem] 2xl:h-[48rem] object-cover w-full blur-[2px]"
                       src="/images/main-omg.jpeg" alt="main image"/>
                <div className="absolute top-10 px-2 sm:px-12 2xl:px-40 py-20 lg:py-24 xl:py-32">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6">
                            <div className="font-mono flex flex-row items-baseline">
                                <Image width="100" height="80" src="/images/sg-logo2.png" className="w-20 h-auto"
                                       alt=""/>
                                <span
                                    className="text-xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                                Signature
                            </span>
                                <br/>
                                <span className="italic text-xs text-white">Group</span>
                            </div>
                            <p className="text-sm my-4 text-white">
                                At SG Signature Group, our experienced team is dedicated to helping you find your dream
                                home or investment property.
                                Whether you are buying, selling, or renting, we have the knowledge and resources to help
                                you achieve your real estate goals.
                                <br/>
                                <br/>
                                Contact us today to learn more.
                            </p>
                            <button
                                className="border-2 border-black font-bold uppercase w-36 py-1.5
                                 rounded-md shadow-2xl bg-black text-white hover:shadow-lg transition-all ease-in-out duration-700">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <Exploreour/>
            </div>
        </>
    );
};

export default home;