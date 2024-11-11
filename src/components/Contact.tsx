import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Bounce, toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ContactMe {
  name: string;
  email: string;
  message: string;
  send: string;
}
interface Inputs {
  user_name: string;
  user_email: string;
  message: string;
}

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const contactMeTitle = t('contactMeTitle');
  const contactMe = t('contactMe', { returnObjects: true }) as ContactMe;
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
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

  const sendEmail: SubmitHandler<Inputs> = () => {
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
        <form
          className='grid md:ml-0 lg:ml-[35%]'
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <label
            htmlFor='user_name'
            className={`w-[250px] ${isArabic ? 'text-right' : ''}`}
          >
            {contactMe.name}
          </label>
          <div className='flex'>
            <input
              className='w-[250px] mb-5 text-black p-1 rounded'
              type='text'
              {...register('user_name', { required: 'This is required.' })}
              placeholder='Your Name'
            />
            <p className='pl-3 pt-1'>{errors.user_name?.message}</p>
          </div>

          <label
            htmlFor='user_email'
            className={`w-[250px] ${isArabic ? 'text-right' : ''}`}
          >
            {contactMe.email}
          </label>
          <div className='flex'>
            <input
              className='w-[250px] mb-5 text-black p-1 rounded'
              type='email'
              {...register('user_email', { required: 'This is required.' })}
              placeholder='Your Email'
            />
            <p className='pl-3 pt-1'>{errors.user_email?.message}</p>
          </div>

          <label
            htmlFor='message'
            className={`w-[350px] md:w-[450px] ${isArabic ? 'text-right' : ''}`}
          >
            {contactMe.message}
          </label>
          <div className='flex'>
            <textarea
              className='w-[350px] md:w-[450px] h-[150px] mb-5 text-black p-1 rounded'
              {...register('message', { required: 'This is required.' })}
              placeholder='Your Message...'
            />
            <p className='pl-3 pt-1'>{errors.message?.message}</p>
          </div>

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
