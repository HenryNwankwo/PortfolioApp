import Image from 'next/image';

const Skills = ({ source_Serif_4 }) => {
  return (
    <>
      {/* The Skills section */}

      <section id='skills' className='py-4'>
        <div className='text-center py-4 text-2xl sm:text-3xl font-bold'>
          <h2 className={source_Serif_4.className}>My Skills</h2>
        </div>
        <div className='w-full sm:px-24 px-8 flex flex-wrap gap-6 justify-center items-center my-2'>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
          <div className='ptf-skills-box'>
            <Image alt='Skill Image'></Image>
            <p className='font-medium'>Skill Name</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
