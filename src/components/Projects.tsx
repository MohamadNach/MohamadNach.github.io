import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  technologies: string[];
}
const Projects = () => {
  const { t } = useTranslation();
  const projectTitle = t('projectsTitle');

  const projects = t('projects', { returnObjects: true }) as Project[];
  return (
    <div>
      <h2 className='my-20 text-center text-4xl'>{projectTitle}</h2>
      <div className='grid lg:grid-cols-4 justify-center gap-10'>
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              title={project.title}
              image={project.image}
              link={project.link}
              description={project.description}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
