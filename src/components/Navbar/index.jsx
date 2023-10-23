"use client";

import { List, StarFour } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-color-dark flex flex-row justify-between items-center px-20 py-5">
            {/* <Image src="/logo.png" width={150} height={38} /> */}
            <div className="flex flex-row gap-1">
                <div className="items-center">
                    <h1 className="font-bold text-3xl text-color-light">STORY LIFE</h1>
                </div>
                <div className="items-start">
                    <StarFour size={12} weight="fill" className="text-color-light" />
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <Link href="/" className="text-color-light hover:text-color-primary transition-all">HOME</Link>
                <Link href="/" className="text-color-light hover:text-color-primary transition-all">JADWAL</Link>
                <Link href="/" className="text-color-light hover:text-color-primary transition-all">SERVICE</Link>
                <Link href="/" className="text-color-light hover:text-color-primary transition-all">GALLERY</Link>
                <Link href="/" className="text-color-light hover:text-color-primary transition-all">PORTOPOLIO</Link>
                <Link href="/" className="text-color-light hover:text-color-primary transition-all">REVIEW</Link>
                <Link href="/" className="text-color-light hover:text-color-primary transition-all">CONTACT</Link>
            </div>
            <List size={38} className="text-color-light" />
        </div>
    );
};

export default Navbar;
