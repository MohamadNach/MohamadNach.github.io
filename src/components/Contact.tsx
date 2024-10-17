import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ContactMe {
  address: string;
  phone: string;
  email: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const contactMeTitle = t('contactMeTitle');
  const contactMe = t('contactMe', { returnObjects: true }) as ContactMe;
  return (
    <div className='border-b border-neutral-900 pb-20 '>
      <h2 className='my-20 text-center text-4xl'>{contactMeTitle}</h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className='text-center'
      >
        <p className=''>{contactMe.address}: Terveystie 19, Hollola 15870</p>
        <p className='my-4'>{contactMe.phone}: +358 40 167 70 88</p>
        <span>
          {contactMe.email}:{' '}
          <a href='#' className=' '>
            mohamad.nachawati@proton.me
          </a>
        </span>
      </motion.div>
    </div>
  );
};

export default Contact;
