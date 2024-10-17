import { motion } from 'framer-motion';
import logo from '../assets/Tech Channel Logo in Sky Blue White Purple Bold Style (2).png';
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