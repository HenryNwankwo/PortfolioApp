import Image from 'next/image';
import { skills } from '@/app/content';

const Skills = ({ source_Serif_4 }) => {
  return (
    <>
      {/* The Skills section */}

      <section id='skills' className='py-4'>
        <div className='text-center py-4 text-2xl sm:text-3xl font-bold'>
          <h2 className={source_Serif_4.className}>My Skills</h2>
        </div>
        <div className='w-full sm:px-24 px-8 flex flex-wrap gap-6 justify-center items-center my-2'>
          {skills.map((skill) => (
            <div className='ptf-skills-box' key={skill.id}>
              <Image
                alt={`${skill.name} logo`}
                src={skill.image}
                width={80}
                height={80}
              ></Image>
              <p className='font-medium'>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
