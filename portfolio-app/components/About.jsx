import { devInfo } from '@/app/content';
const About = ({ source_Serif_4 }) => {
  return (
    <>
      {/* The About section */}

      <section id='about' className='ptf-pri-section'>
        <div>
          <h1
            className={`dark:text-white text-3xl sm:text-5xl font-bold ${source_Serif_4.className}`}
          >
            About
          </h1>
          <p className='text-sm font-medium dark:text-orange-400 text-green-500 py-1'>
            Get to know me
          </p>
        </div>
        <div className='mt-4 flex flex-row w-full'>
          <span className='block border-t-2 border-solid border-green-500 dark:border-orange-400 w-32 mt-2 mr-2'></span>
          <p className='pa_aboutText '>{devInfo.about_me}</p>
        </div>
      </section>
    </>
  );
};

export default About;
