import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

import aboutMe from '../assets/AboutMe.jpg';

const About = () => {
  const { t } = useTranslation();
  const aboutMeImageAltText = t('aboutMeImageAltText');

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>
        <Trans i18nKey='aboutMeTitle'>
          About <span className='text-[#5ce1e6]'>Me</span>
        </Trans>
      </h2>
      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className='p-8 w-full lg:w-1/2'
        >
          <div className='items-center justify-center'>
            <img
              src={aboutMe}
              alt={aboutMeImageAltText}
              className='rounded-3xl w-[400px] m-auto'
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 p-8'
        >
          <div className='flex justify-center lg:justify-start'>
            <p>{t('aboutMeContent')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
