import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import profilePic from '../assets/MohamadProfile.jpg';

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const name = t('name');
  const heroTitle = t('heroTitle');
  const heroContent = t('heroContent');
  const aboutMeImageAltText = t('aboutMeImageAltText');

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap flex-col-2'>
        <div className='w-full lg:w-1/2'>
          <div
            className={`flex flex-col items-center ${
              isArabic ? 'items-end' : 'lg:items-start'
            }`}
          >
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className={`p-2 pb-16 text-5xl tracking-tight lg:mt-16 lg:text-7xl ${
                isArabic ? 'text-right' : ''
              }`}
            >
              {name}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className={`bg-gradient-to-r from-[#5ce1e6] via-slate-300 to-white bg-clip-text text-3xl tracking-tight text-transparent ${
                isArabic ? 'text-right' : ''
              }`}
            >
              {heroTitle}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className={`my-2 max-w-xl py-6 font-light tracking-normal text-lg ${
                isArabic ? 'text-right' : ''
              }`}
            >
              {heroContent}
            </motion.p>
          </div>
        </div>
        <div className='m-auto lg:w-1/2 lg:p-12 '>
          <motion.img
            src={profilePic}
            data-fetchpriority='high'
            alt={aboutMeImageAltText}
            width={500}
            height={450}
            className='rounded-3xl m-auto'
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
