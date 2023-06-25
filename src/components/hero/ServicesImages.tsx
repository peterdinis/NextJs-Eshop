"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import FirstImage from "../images/firstImage.jpg";

const ServicesImages: React.FC = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="lg:w-7/12 lg:mt-0 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full h-full bg-red-200">
        <motion.div variants={imageVariants}>
          <Image
            src={FirstImage}
            alt="Image"
            className="w-full sm:block hidden"
          />
        </motion.div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
        <motion.img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          className="w-full"
          alt="kitchen"
          variants={imageVariants}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          className="w-full"
          alt="sitting room"
          variants={imageVariants}
        />
      </div>
    </motion.div>
  );
};

export default ServicesImages;