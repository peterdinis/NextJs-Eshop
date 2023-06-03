import Hero from "@/components/hero/Hero";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const Homepage: NextPage = () => {
  return (
    <>
     <Navbar />
     <Hero />
    </>
  )
}

export default Homepage;