import Hero from "@/components/hero/Hero";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { NextPage } from "next";

const Homepage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero
        imageUrl="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
        title="Welcome to Food E-Shop"
        description="Discover a variety of delicious dishes!"
        buttonText="Order Now"
      />
      <Footer />
    </>
  )
}

export default Homepage;