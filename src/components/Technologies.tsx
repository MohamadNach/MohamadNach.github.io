import { RiReactjsLine } from 'react-icons/ri';
import { RiAngularjsLine } from 'react-icons/ri';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaNode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as 'reverse',
    },
  },
});

const Technologies = () => {
  const { t } = useTranslation();
  return (
    <div className='border-b bor der-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>{t('TechnologiesTitle')}</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400 ' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiAngularjsLine className='text-7xl text-red-700 ' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <BiLogoPostgresql className='text-7xl text-sky-700 ' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaNode className='text-7xl text-green-600 ' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
