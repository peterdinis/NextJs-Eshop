"use client"

import { motion } from 'framer-motion';
import ScrollToTop from '@/hooks/useScroll';
import Header from '../shared/Header';
import Link from 'next/link';
import FoodSearch from './FoodSearch';

const FoodLists: React.FC = () => {
  const itemVariants = {
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
    <>
      <Header name="All Foods" />
      <FoodSearch />
      <div className="grid grid-cols-4 gap-4 mt-4">
        <motion.div
          className="bg-white p-4 shadow-md rounded-md"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://picsum.photos/200/300"
            alt="TOTO"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <motion.h3 className="text-lg font-medium mb-2">z</motion.h3>
          <motion.p className="text-gray-600">r</motion.p>
          <motion.div
            className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">DETAIL</Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-white p-4 shadow-md rounded-md"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://picsum.photos/200/300"
            alt="TOTO"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <motion.h3 className="text-lg font-medium mb-2">z</motion.h3>
          <motion.p className="text-gray-600">r</motion.p>
          <motion.div
            className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">DETAIL</Link>
          </motion.div>
        </motion.div><motion.div
          className="bg-white p-4 shadow-md rounded-md"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://picsum.photos/200/300"
            alt="TOTO"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <motion.h3 className="text-lg font-medium mb-2">z</motion.h3>
          <motion.p className="text-gray-600">r</motion.p>
          <motion.div
            className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">DETAIL</Link>
          </motion.div>
        </motion.div><motion.div
          className="bg-white p-4 shadow-md rounded-md"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://picsum.photos/200/300"
            alt="TOTO"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <motion.h3 className="text-lg font-medium mb-2">z</motion.h3>
          <motion.p className="text-gray-600">r</motion.p>
          <motion.div
            className="mt-4 flex justify-center align-top bg-blue-400 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">DETAIL</Link>
          </motion.div>
        </motion.div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default FoodLists;