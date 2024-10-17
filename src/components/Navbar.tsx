import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import Logo from './Logo';
import Language from './Language';

const Navbar = () => {
  return (
    <nav className=' mb-10 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center w-52 h-28'>
        <Logo />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer'>
        <a href='https://www.linkedin.com/in/mohamad-nachawati-a801891b7/'>
          <FaLinkedin />
        </a>
        <a href='https://github.com/MohamadNach'>
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
