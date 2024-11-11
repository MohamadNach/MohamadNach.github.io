import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Bounce, toast } from 'react-toastify';

interface ContactMe {
  name: string;
  email: string;
  message: string;
  send: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const contactMeTitle = t('contactMeTitle');
  const contactMe = t('contactMe', { returnObjects: true }) as ContactMe;
  const form = useRef<HTMLFormElement>(null);

  // Function to show success toast
  const notify = () =>
    toast.success('Message sent successfully!', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log('SUCCESS!');
            form.current?.reset(); // Clear the form
            notify(); // Show success toast
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Failed to send message!', {
              position: 'bottom-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            }); // Show error toast
          }
        );
    } else {
      console.log('Form not found');
    }
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h2 className='my-20 text-center text-4xl'>{contactMeTitle}</h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <form className='grid ml-[35%]' ref={form} onSubmit={sendEmail}>
          <label htmlFor='user_name'>{contactMe.name}</label>
          <input
            className='w-[250px] mb-5 text-black pl-1 rounded'
            type='text'
            name='user_name'
          />
          <label htmlFor='user_email'>{contactMe.email}</label>
          <input
            className='w-[250px] mb-5 text-black pl-1 rounded'
            type='email'
            name='user_email'
          />
          <label htmlFor='message'>{contactMe.message}</label>
          <textarea
            className='w-[450px] h-[150px] mb-5 text-black pl-1 rounded'
            name='message'
          />
          <input
            className='border w-36 h-10 rounded-lg'
            type='submit'
            value={contactMe.send}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
