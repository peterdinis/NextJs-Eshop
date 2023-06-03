import Hero from "@/components/hero/Hero";
import Services from "@/components/hero/Services";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const Homepage: NextPage = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <Services />
     <Footer />
    </>
  )
}

export default Homepage;