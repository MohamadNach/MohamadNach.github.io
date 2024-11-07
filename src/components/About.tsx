import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-10 text-center text-4xl'>
        <Trans i18nKey='aboutMeTitle'>
          About <span className='text-[#5ce1e6]'>Me</span>
        </Trans>
      </h2>
      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className='w-full  p-8'
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
