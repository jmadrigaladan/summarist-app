import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Numbers from "@/components/Numbers";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
