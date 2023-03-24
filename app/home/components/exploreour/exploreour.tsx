import React from 'react';
import Image from "next/image";

const Exploreour = () => {
    return (
        <div className="grid grid-cols-12 gap-0 mt-8 px-2 sm:px-12 2xl:px-40">
            <div className="col-span-3 h-px bg-yellow-600 my-auto"></div>
            <div className="col-span-6">
                <h1 className="text-center uppercase tracking-wider font-mono text-2xl font-semibold">
                    Explore our residential projects
                </h1>
            </div>
            <div className="col-span-3 h-px bg-yellow-600 my-auto"></div>
            <div className="col-span-12 my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1 md:col-span-2 relative cursor-pointer group overflow-hidden">
                        <Image width="800" height="600" src="/images/main-img.jpeg" alt="image 1" className="w-full h-auto group-hover:scale-150 transition-all ease-in-out duration-700"/>
                        <div className="absolute bottom-0 w-full text-center bg-white bg-opacity-75 py-2 hidden group-hover:block transition-all ease-in-out duration-1000">
                            <p className="text-gray-800 font-bold uppercase">gorakhpur</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-1 grid grid-cols-1 gap-2">
                        <div className="relative cursor-pointer group overflow-hidden">
                            <Image width="400" height="300" src="/images/main-img.jpeg" alt="image 2" className="w-full h-auto group-hover:scale-150 transition-all ease-in-out duration-700"/>
                                <div className="absolute bottom-0 w-full text-center bg-white bg-opacity-75 py-2 hidden group-hover:block transition-all ease-in-out duration-1000">
                                    <p className="text-gray-800 font-bold uppercase">deoria</p>
                                </div>
                        </div>
                        <div className="relative cursor-pointer group overflow-hidden">
                            <Image width="400" height="300" src="/images/main-img.jpeg" alt="image 2" className="w-full h-auto group-hover:scale-150 transition-all ease-in-out duration-700"/>
                                <div className="absolute bottom-0 w-full text-center bg-white bg-opacity-75 py-2 hidden group-hover:block transition-all ease-in-out duration-1000">
                                    <p className="text-gray-800 font-bold uppercase">patna</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exploreour;