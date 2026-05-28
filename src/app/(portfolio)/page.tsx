import Link from "next/link";

export default function Home() {
    return (
        <div className="grid grid-cols-1 gap-8 p-4  lg:max-w-4xl md:max-w-2xl  max-w-lg mx-auto h-full">
            <div className="flex flex-col gap-4 justify-center">
                <h1 className="text-lg sm:text-4xl font-bold text-center">
                    Turning Complex Problems into Simple Web Solutions</h1>
                <p className="text-sm sm:text-lg text-center">
                    I’m <strong>Giancarlo</strong> —— a self-taught web developer with 7 years experience in building digital products that solve real problems.
                    I’m passionate about creating seamless, user-friendly experiences that not only look great but feel intuitive.
                    Whether it’s optimizing performance, refining UI/UX, or developing scalable solutions, I focus on delivering products that truly enhance the user experience.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link className="font-normal" href="/about">
                        <button className="border rounded-xl p-4 self-center py-2 px-6 hover:bg-white hover:text-black">Meet me</button>
                    </Link>
                    <Link href='/docs/Giancarlo_Angela_CV2.pdf' download target="_blank">
                        <button className="border rounded-xl p-4 self-center py-2 px-6 hover:bg-white hover:text-black">Download CV</button>
                    </Link>
                </div>
            </div>
        </div >
    );
}
