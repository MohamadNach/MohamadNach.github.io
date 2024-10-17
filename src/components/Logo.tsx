import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
const Logo = () => {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1],
        }}
      >
        <img src={logo} alt='' />
      </motion.div>
    </>
  );
};

export default Logo;
