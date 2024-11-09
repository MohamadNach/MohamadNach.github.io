//@ts-nocheck
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
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
  // const form = useRef();

  // const sendEmail = (e: any) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       form.current,
  //       {
  //         publicKey: process.env.REACT_APP_PUBLIC_KEY,
  //       }
  //     )
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       }
  //     );
  // };
  return (
    <div className='border-b border-neutral-900 pb-20 '>
      <h2 className='my-20 text-center text-4xl'>{contactMeTitle}</h2>
      {/* <form className='grid' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          className='w-[350px] mb-5 text-black pl-1'
          type='text'
          name='user_name'
        />
        <label>Email</label>
        <input
          className='w-[350px] mb-5 text-black pl-1'
          type='email'
          name='user_email'
        />
        <label>Message</label>
        <textarea className='h-[150px] mb-5  text-black pl-1' name='message' />
        <input
          className='border w-36 h-10 m-auto rounded-lg'
          type='submit'
          value='Send'
        />
      </form> */}
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
