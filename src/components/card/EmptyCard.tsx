import { motion } from 'framer-motion';
import { TiShoppingCart } from 'react-icons/ti';

const EmptyBasket: React.FC = () => {
  const messageAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={messageAnimation.initial}
      animate={messageAnimation.animate}
      className="mt-8 flex flex-col items-center justify-center text-gray-500"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <TiShoppingCart size={48} />
      </motion.div>
      <p className="mt-4 text-xl font-medium">Your card is empty</p>
    </motion.div>
  );
};

export default EmptyBasket;