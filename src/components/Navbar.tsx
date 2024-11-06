import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import Logo from './Logo';
import Language from './Language';

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between'>
      <div className='flex flex-shrink-0 items-center w-52 h-28'>
        <Logo />
      </div>
      <div className='m-4 flex items-center justify-center gap-4 text-2xl cursor-pointer lg:mr-8'>
        <a
          href='https://www.linkedin.com/in/mohamad-nachawati-a801891b7/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/MohamadNach'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <div>
          <Language />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;