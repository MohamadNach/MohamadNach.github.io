import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
interface Experiences {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experiences', {
    returnObjects: true,
  }) as Experiences[];

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>{t('ExperiencesTitle')}</h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>
                {experience.role} -{' '}
                <span className='text-sm text-purple-100'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#5ce1e6]'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
