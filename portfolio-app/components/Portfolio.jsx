import ProjectCard from './ProjectCard';

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
        <div className='w-fit flex flex-wrap justify-center items-center md:grid md:grid-cols-3 md:justify-items-center md:content-center m-2'>
          <ProjectCard />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
