import Image from "next/image";

const Features = () => {
    return (
        <section id="features" className="py-6 mb-6">
            <div className="custom-screen">
                <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-x-12 gap-y-8">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
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
                    <div className="w-full lg:w-1/2 max-w-xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Figma Design Kit
                        </h2>
                        <p className="mt-3 text-gray-600 text-lg">
                            Get access to 100+ components, 15+ Landing pages & more in one
                            design kit on Figma!
                        </p>
                        <div className="mt-4">
                            <span className="text-xl">$29 (one-time)</span>
                            <br />
                            <span className="text-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-violet-900 to-blue-500 ">
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
