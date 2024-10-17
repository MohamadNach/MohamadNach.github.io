import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const { i18n } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    setIsLangOpen(false); // Close dropdown after selecting
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef}>
      <div className='relative md:flex items-center ml-auto'>
        <div
          className='relative cursor-pointer'
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <button className='flex text-sm items-center w-16 h-9 px-3 py-2 border rounded-md'>
            {selectedLang}
            <svg
              className='w-4 h-4 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>
        </div>
        {/* Dropdown for Language Selection */}
        {isLangOpen && (
          <ul className='absolute right-0 w-28 shadow-lg rounded-lg z-50 top-10 border'>
            <li
              className='py-2 px-5 hover:cursor-pointer text-lg'
              onClick={() => handleLanguageChange('en')}
            >
              English
            </li>
            <li
              className='py-2 px-5 hover:cursor-pointer text-lg border'
              onClick={() => handleLanguageChange('ar')}
            >
              Arabic
            </li>
            <li
              className='py-2 px-5 hover:cursor-pointer text-lg'
              onClick={() => handleLanguageChange('fi')}
            >
              Finnish
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Language;
