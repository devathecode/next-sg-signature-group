import React from 'react';
import Image from "next/image";

const Contact = () => {
    return (
        <div
            className="max-w-screen-xl mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 px-2 sm:px-12 2xl:px-40 py-20 lg:py-24 xl:py-32 mx-auto">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                    <div className="text-gray-700 mt-8">
                        Hate forms? Send us an <span className="underline">email</span> instead.
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <Image width="500" height={400} src="/images/contact.svg" alt=""/>
                </div>
            </div>
            <div className="my-auto">
                <div>
                    <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                    <input
                        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder=""/>
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input
                        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"/>
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mt-8">
                    <button
                        className="uppercase text-sm font-bold tracking-wide bg-yellow-600 hover:bg-yellow-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;