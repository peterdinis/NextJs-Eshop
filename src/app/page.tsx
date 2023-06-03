import Hero from "@/components/hero/Hero";
import Services from "@/components/hero/Services";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";
import { Fragment } from "react";

const Homepage: NextPage = () => {
  return (
    <Fragment>
     <Navbar />
     <Hero />
     <Services />
     <Footer />
    </Fragment>
  )
}

export default Homepage;