'use client';
import { useState } from 'react';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa';
import QualificationCard from './QualificationCard';
import { experienceItems, educationItems } from '@/app/content';

const Experience = ({ source_Serif_4 }) => {
  const [viewIndex, setViewIndex] = useState(0);

  return (
    <>
      {/* The Qualification section */}

      <section
        id='experience'
        className='ptf-pri-section bg-slate-50 dark:bg-gray-800 shadow-xl shadow-transparent'
      >
        <div>
          <h1
            className={`dark:text-white text-3xl sm:text-5xl font-bold ${source_Serif_4.className}`}
          >
            Qualifications
          </h1>
          <p className='text-sm font-medium dark:text-orange-400 text-green-500 py-1 pl-2'>
            Why you should hire me
          </p>
        </div>

        {/* The Qualification tabs */}

        <ul className='w-full flex justify-center items-center my-10 '>
          <li
            className={`ptf-nav-tab ${viewIndex === 0 ? 'ptf-active' : ''}`}
            onClick={() => setViewIndex((prev) => (prev === 0 ? prev : 0))}
          >
            <FaUserGraduate className='mr-2' />
            Education
          </li>
          <li
            className={`ptf-nav-tab ${viewIndex === 1 ? 'ptf-active' : ''}`}
            onClick={() => setViewIndex((prev) => (prev === 1 ? prev : 1))}
          >
            <FaBriefcase className='mr-2' />
            Experience
          </li>
        </ul>

        {/* Education Container */}

        <div
          className={`w-full sm:w-2/3 flex-col items-center justify-center mx-auto my-4 ${
            viewIndex === 0 ? 'flex' : 'hidden'
          }`}
        >
          {educationItems.map((item) => (
            <QualificationCard
              key={item.id}
              title={item.title}
              description={item.description}
              location={item.location}
              year={item.year}
            />
          ))}
        </div>

        {/* Experience Container */}

        <div
          className={`w-full sm:w-2/3 flex-col items-center justify-center mx-auto my-4 ${
            viewIndex === 1 ? 'flex' : 'hidden'
          }`}
        >
          {experienceItems.map((item) => (
            <QualificationCard
              key={item.id}
              title={item.title}
              description={item.description}
              location={item.location}
              year={item.year}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
