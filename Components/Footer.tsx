"use client";
import Brand from './Brand'

const Footer = () => {
    const footerNavs = [
        {
            label: "Resources",
            items: [
                {
                    href: '/',
                    name: 'About us'
                },
                {
                    href: '/',
                    name: 'Contact'
                }
            ]
        },
        {
            label: "Company",
            items: [
                {
                    href: '/',
                    name: 'Privacy Policy'
                },
                {
                    href: '/',
                    name: 'Terms of Service'
                }
            ]
        }
    ]

    return (
        <footer className="pt-10" id='footer'>
            <div className="custom-screen relative">
                <div className="absolute inset-0 backdrop-blur-md bg-white/10" />
                <div className="relative z-10 gap-12 justify-between md:flex">
                    <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
                        <Brand />
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Create stunning landing pages with our professional design kit.
                        </p>
                    </div>
                    <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                        {footerNavs.map((item, idx) => (
                            <ul className="space-y-4" key={idx} data-aos="fade-up" data-aos-delay={200 + (idx * 100)}>
                                <h4 className="text-gray-800 font-medium">
                                    {item.label}
                                </h4>
                                {item.items.map((el, idx) => (
                                    <li key={idx} data-aos="fade-left" data-aos-delay={300 + (idx * 50)}>
                                        <a
                                            href={el.href}
                                            className="text-gray-600 hover:text-[#8B5CF6] hover:underline transition-colors"
                                        >
                                            {el.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-8 py-6 items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0" data-aos="fade-right">
                        &copy; 2025 Sundesign. All rights reserved.
                    </div>
                    <div className="mt-6 sm:mt-0" data-aos="fade-left">
                        <ul className="flex items-center space-x-4">
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-[#8B5CF6] transition-colors" data-aos="zoom-in" data-aos-delay="100">
                                <a href="/" aria-label="Twitter" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
                                    <svg className="svg-icon w-6 h-6" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:border-[#8B5CF6] transition-colors" data-aos="zoom-in" data-aos-delay="200">
                                <a href="/" aria-label="GitHub" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer