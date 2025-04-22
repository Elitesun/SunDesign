import Nav from "@/Components/Nav";
import Hero from "@/Components/Hero";
import Features from "@/Components/Features";

const Page = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-4 md:px-8">
      <Nav />
      <Hero />
      <Features />
    </main>
  );
}

export default Page;