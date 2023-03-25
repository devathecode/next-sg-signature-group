import React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-gray-50 py-10 px-2 sm:px-12 2xl:px-40">
            <div className="grid grid-cols-12 gap-2 max-w-6xl mx-auto">
                <div className="col-span-12 md:col-span-6">
                    <div className="mb-4 font-mono flex flex-row items-center">
                        <Image width="200" height="80" src="/images/sg-logo2.png" className="w-10 md:w-12 h-auto" alt=""/>
                        <div className="flex flex-col">
                                <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter text-black">
                                    Signature
                                </span>
                            <span className="italic text-xs text-black -mt-1 tracking-widest">Group</span>
                        </div>
                    </div>

                    <div className="flex text-gray-500 uppercase text-xs">
                        Address : Buddh Vihar Part - A 35/2-B Taramandal, Siddharth Enclave
                        Infront of Post Office, Gorakhpur-273017
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 md:place-self-end">
                    <h1 className="font-medium text-lg text-gray-700 mb-4">Subscribe to our Newsletter</h1>
                    <form className="mt-4">
                        <input
                            className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="username@email.com"/>
                    </form>
                </div>
                <div className="col-span-12 border-t border-gray-300 mt-10 text-gray-500">
                    <p className="mt-6 text-center">© 2023 SG Signature Group. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;