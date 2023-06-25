import { motion, Variants } from 'framer-motion';

interface ILoadingProps {
  message: string;
}

const loadingVariants: Variants = {
  animation: {
    scale: [1, 0.5, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

const Loader: React.FC<ILoadingProps> = ({message}: ILoadingProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <motion.div
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: '#007BFF',
        }}
        variants={loadingVariants}
        animate="animation"
      />
      {message}
    </div>
  );
};

export default Loader;