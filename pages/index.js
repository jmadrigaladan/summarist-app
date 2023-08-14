import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Numbers from "@/components/Numbers";
import Reviews from "@/components/Reviews";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.user.email);
  console.log(user);
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
