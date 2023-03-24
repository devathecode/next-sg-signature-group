"use client";

import React, {useState} from 'react';
import Image from "next/image";
import Header from "@/app/core/components/Header/Header";
import Footer from "@/app/core/components/Footer/Footer";

export default function HomeLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${open && 'h-screen overflow-hidden'} font-whole`}>
            <Header handleSubMenuOpen={setOpen}/>
            <div className="mt-12 md:mt-16">
                {children}
            </div>
            <Footer/>
        </div>
    )
}