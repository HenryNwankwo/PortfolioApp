import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
function ProjectCard({
  name,
  description,
  githubUrl,
  previewUrl,
  imageAlt,
  imageSrc,
  tags,
}) {
  return (
    <div className='flex-1 w-60 h-auto m-3 break-inside-avoid shadow-lg shadow-slate-200 dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer group transition-all transform duration-300 relative'>
      <div className='w-full'>
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt={imageAlt}
          className='rounded-t-md'
        />
      </div>
      {/* Contains the info about a portfolio project or card */}
      <div className='w-full h-full rounded-md bg-white dark:bg-yellow-100 dark:text-black bg-opacity-40 dark:bg-opacity-40 flex-col justify-center items-center gap-2 p-3 hidden group-hover:flex transition-all transform duration-300 group-hover:absolute group-hover:left-0 group-hover:top-0 backdrop-blur-sm'>
        <h3 className='text-xl font-semibold text-green-600 dark:text-orange-500'>
          {name || ''}
        </h3>
        <p className='text-xs text-center'>{description || ''}</p>
        <div className='flex justify-between items-center w-full px-2'>
          <Link
            href={previewUrl || '/'}
            target='_blank'
            className='py-2 px-3.5 rounded-full bg-transparent outline outline-2 outline-gray-800 dark:outline-orange-500 text-black text-sm hover:bg-gray-800 hover:outline-none dark:hover:outline-none hover:text-white flex'
          >
            Preview <HiOutlineExternalLink className='text-lg ml-1' />
          </Link>
          <Link
            href={githubUrl || '/'}
            target='_blank'
            className='py-2 px-3.5 rounded-full bg-green-500 text-white dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-black text-sm hover:bg-green-400 flex'
          >
            Github <HiOutlineExternalLink className='text-lg ml-1' />
          </Link>
        </div>
      </div>

      <div className='w-full h-auto min-h-[50px] flex flex-wrap justify-center items-center bg-gradient-to-tr from-green-300 to-blue-300 dark:from-orange-400 dark:to-yellow-400 rounded-b-md p-2 pb-0.5'>
        {tags?.map((item, index) => (
          <p
            className='px-2 py-1 rounded-2xl mr-1 bg-white bg-opacity-50 text-gray-800 font-semibold dark:bg-opacity-30 mb-1.5 dark:text-gray-800 text-center text-[0.75rem]'
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
