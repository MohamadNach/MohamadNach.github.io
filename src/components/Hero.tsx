import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import profilePic from '../assets/MohamadProfile.jpg';

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
  const { t } = useTranslation();
  const name = t('name');
  const heroTitle = t('heroTitle');
  const heroContent = t('heroContent');

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className=' p-2 pb-16 text-5xl tracking-tight lg:mt-16 lg:text-7xl'
            >
              {name}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-[#5ce1e6] via-slate-300 to-white bg-clip-text text-3xl tracking-tight text-transparent'
            >
              {heroTitle}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
            >
              {heroContent}
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-12 '>
          <motion.img
            src={profilePic}
            alt='Mohamad Nachawati'
            className='rounded-3xl'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
