"use client"
import Image from "next/image"

export const ImageOfMe = () => {
    return <Image priority src="/images/giancarlo.jpg" alt="Giancarlo Angela" width={400} height={300} className="hidden md:block md:w-[400px] sm:w-[300px] w-[280px] mx-auto rounded-md opacity-0 transition-opacity duration-[2s]" onLoad={img => img.currentTarget.classList.remove('opacity-0')} />
}    