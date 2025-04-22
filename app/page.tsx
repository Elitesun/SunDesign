'use client';

import { useEffect } from 'react';
import Nav from "@/Components/Nav";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { initAOS } from '@/utils/aos';

const Page = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <>
      <main className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Nav />
        <Hero />
        <Footer />
      </main>
    </>
  );
}

export default Page;