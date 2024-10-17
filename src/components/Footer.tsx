import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const footer = t('footer');
  return (
    <div className='py-5 text-sm text-gray-500 sm:text-center dark:text-gray-400'>
      <span>
        © 2024{' '}
        <a href='' className='hover:underline'>
          Mohamad Nachawati
        </a>
        . Licensed under the <a href='/license'>MIT License</a>. {footer}
      </span>
    </div>
  );
};

export default Footer;
