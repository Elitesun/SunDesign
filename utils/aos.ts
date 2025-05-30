'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
    AOS.init({
        duration: 800,
        once: false,
        easing: 'ease-out',
        mirror: true
    });
};