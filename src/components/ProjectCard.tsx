import { motion } from 'framer-motion';
import i18n from '../../utils/i18n';
interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  technologies: string[];
}
const ProjectCard = (props: Project) => {
  const isArabic = i18n.language === 'ar';
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => {}}
      onHoverEnd={() => {}}
      className='flex-col w-full m-1'
    >
      <a
        href={props.link}
        target='_blank'
        aria-label='Move to see more details about this project'
        // Security best practice
        rel='noopener noreferrer'
      >
        <h4 className='my-5 text-center text-xl'>{props.title}</h4>
        <img
          data-fetchpriority='high'
          src={props.image}
          alt={props.title}
          width={250}
          height={250}
          className=' rounded-2xl m-auto cursor-pointer w-[300px] h-[300px] md:w-[450px]'
        />
        <p
          className={`w-[60%] m-auto py-5 lg:w-full ${
            isArabic ? 'text-right' : ''
          }`}
        >
          {props.description}
        </p>
        <div className='grid lg:grid-cols-1 items-stretch m-auto gap-1 w-[50%]'>
          {props.technologies.map((tech, index) => (
            <span
              key={index}
              className='mr-1 text-center rounded bg-neutral-50 px-1 py-1 text-cyan-600 text-sm'
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
