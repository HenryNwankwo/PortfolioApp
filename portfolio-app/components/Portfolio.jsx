import ProjectCard from './ProjectCard';
import { projectInfo } from '@/app/content';

const Portfolio = ({ source_Serif_4 }) => {
  return (
    <>
      {/* The Portfolio section */}

      <section
        id='portfolio'
        className='w-full h-auto py-20 flex flex-col items-center'
      >
        <div className='text-center py-4 text-2xl sm:text-3xl font-bold'>
          <h2 className={source_Serif_4.className}>Portfolio</h2>
          <p className='text-sm font-medium dark:text-orange-400 text-green-500 py-1'>
            Some past works
          </p>
        </div>
        <div className='w-fit flex flex-wrap justify-center items-start m-2 md:w-3/4 xl:w-1/2 md:mx-auto'>
          <div className='sm:columns-2 lg:columns-3 space-y-8'>
            {projectInfo.map((project) => (
              <ProjectCard
                key={project.id}
                description={project.description}
                name={project.name}
                imageAlt={project.imgAlt}
                imageSrc={project.imgScr}
                githubUrl={project.githubUrl}
                previewUrl={project.previewUrl}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
