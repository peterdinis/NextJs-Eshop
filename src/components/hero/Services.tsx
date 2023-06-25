"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import ServicesImages from "./ServicesImages";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="lg:px-20 md:px-6 px-4 md:py-12 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:flex items-center justify-between">
        <motion.div variants={contentVariants}>
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Our Services
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600">
            Get inspired by our curated selection of luxiwood interiors. We
            hope to inspire you to have a luxiwood interior yourself. You'll
            find tips here on where you can buy a lot of cool furniture.
          </p>
          <Link
            href="/foods"
            aria-label="view catalogue"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline"
          >
            View Our foods
            <AiFillCaretRight className="ml-1" />
          </Link>
        </motion.div>
        <ServicesImages />
      </div>
    </motion.div>
  );
};

export default Services;