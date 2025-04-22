"use client";
import Image from "next/image";

const Features = () => {
    return (
        <section id="features" className="py-12">
            <div className="custom-screen">
                <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-x-12 gap-y-8">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-right" data-aos-delay="100">
                        <div className="hover:scale-[1.1] transition duration-700 ease-in-out">
                            <Image
                                src="/cover.jpg"
                                width={600}
                                height={400}
                                className="rounded-lg w-full max-w-md"
                                alt="Create Successful Business Models with Our IT Solutions"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 max-w-xl" data-aos="fade-left" data-aos-delay="200">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl" data-aos="fade-up" data-aos-delay="300">
                            Figma Design Kit
                        </h2>
                        <p className="mt-3 text-gray-600 text-lg" data-aos="fade-up" data-aos-delay="400">
                            Get access to 100+ components, 15+ Landing pages & more in one
                            design kit on Figma!
                        </p>
                        <div className="mt-4" data-aos="fade-up" data-aos-delay="500">
                            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">$29 (one-time)</span>
                            <br />
                            <span className="text-sm sm:text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-900 to-blue-500" data-aos="fade-up" data-aos-delay="800">
                                SPECIAL 40% OFF{" "}
                                <span className="line-through text-black">$49</span> $29
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
