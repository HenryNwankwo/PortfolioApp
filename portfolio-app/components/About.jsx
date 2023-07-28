const About = () => {
  return (
    <>
      <section id='about' className='ptf-pri-section'>
        <div className={source_Serif_4.className}>
          <h1 className='dark:text-white text-3xl sm:text-5xl font-bold'>
            About
          </h1>
        </div>
        <div className='mt-4 flex flex-row w-full'>
          <span className='block border-t-4 border-solid border-green-500 dark:border-orange-400 sm:w-12 w-32 mt-2 mr-2'></span>
          <p className='pa_aboutText '>
            I like to craft solid and scalable frontend products with great user
            experiences. I build accessible, inclusive products and digital
            experiences for the web.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
