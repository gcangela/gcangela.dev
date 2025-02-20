export default function Home() {
    return (
        <div className="size-full items-center flex flex-col justify-center">
            <div className="md:size-1/2 lg:1/2 flex flex-col gap-4 justify-center">
                <h1 className="text-4xl font-bold text-center">
                    Turning Complex Problems into Simple Web Solutions</h1>
                <p className="text-lg text-center">Hi, I’m Giancarlo —— a self-taught web developer with 7 years experience in building digital products that solve real problems. I’m passionate about creating seamless, user-friendly experiences that not only look great but feel intuitive. Whether it’s optimizing performance, refining UI/UX, or developing scalable solutions, I focus on delivering products that truly enhance the user experience.</p>
                <button className="border border-white rounded-xl p-4 self-center py-2 px-6 hover:bg-white hover:text-black">Download CV</button>
            </div>
        </div>
    );
}
