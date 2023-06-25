"use client";

import { motion } from "framer-motion";
import DateTimePicker from "../shared/DateTimePicker";
import Link from "next/link";

interface HeroProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
}: HeroProps) => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-[-1]">
        <div
          className="h-full w-full bg-cover bg-center absolute"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <motion.div
        className="flex flex-col justify-center items-center h-full relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl font-bold text-white mb-4 text-shadow-md"
          variants={textVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg text-shadow-md text-white mb-8"
          variants={textVariants}
        >
          {description}
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/foods"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full uppercase tracking-wide text-shadow-md"
          >
            {buttonText}
          </Link>
        </motion.div>
        <DateTimePicker />
      </motion.div>
    </section>
  );
};

export default Hero;