"use client";
import TrueFocus from "./ui/TrueFocus";
import MetaBalls from "./ui/MetalBalls";

const Hero = () => (
    <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-40">
            <MetaBalls
                color="#8B5CF6"
                cursorBallColor="#7C3AED"
                cursorBallSize={2}
                ballCount={19}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
            />
        </div>
        <div className="min-h-screen w-full py-12 text-gray-600 relative z-10">
            <div className="absolute inset-0 backdrop-blur-md bg-white/10" />
            <div className="relative z-10 space-y-5 max-w-4xl mx-auto text-center px-4" data-aos="zoom-in" data-aos-duration="1000">
                <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-800 font-extrabold mx-auto" data-aos="fade-down" data-aos-delay="200">
                    <span className="relative">
                        <TrueFocus
                            sentence="Well Designed"
                            manualMode={false}
                            blurAmount={5}
                            borderColor="#8B5CF6"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                    </span>

                    {" "}Landing Page{" "}
                    that {" "}
                    <span className="relative">
                        Convert
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#A78BFA]"></span>
                    </span>
                </h1>

                <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl" data-aos="fade-up" data-aos-delay="400">
                    Be a pro at designing landing pages that convert. Get access to our
                    design kit with 100+ components, 15+ landing pages and 10+ full templates built in Figma.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium" data-aos="fade-up" data-aos-delay="600">
                    <span className="text-white text-base sm:text-lg bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#A78BFA] py-2 px-4 rounded-lg hover:from-[#A78BFA] hover:via-[#7C3AED] hover:to-[#8B5CF6] hover:ring ring-transparent ring-offset-2 transition">
                        Join Us
                    </span>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#A78BFA]" data-aos="fade-up" data-aos-delay="800">
                    SPECIAL 40% OFF <span className="line-through text-black">$49</span>   $29
                </span>
                <h2 className="font-semibold text-xs sm:text-sm text-gray-600 text-center mb-4" data-aos="fade-up" data-aos-delay="1000">
                    JOIN 430+ USERS NOW
                </h2>
                <div className="flex flex-wrap items-center justify-center" data-aos="fade-up" data-aos-delay="1200">
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white transform hover:scale-110 transition-transform duration-200"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white -ml-2 transform hover:scale-110 transition-transform duration-200"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white -ml-2 transform hover:scale-110 transition-transform duration-200"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white -ml-2 transform hover:scale-110 transition-transform duration-200"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
