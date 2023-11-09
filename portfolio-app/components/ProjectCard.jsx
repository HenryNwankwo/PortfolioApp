import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
function ProjectCard({ name, description, githubUrl, previewUrl }) {
  return (
    <div className='w-60 h-60 m-3 shadow-xl shadow-transparent dark:shadow-none bg-white dark:bg-gray-800 rounded-md hover:cursor-pointer group transition-all transform duration-300'>
      {/* Contains the info about a portfolio project or card */}
      <div className='w-full h-full rounded-md bg-gray-400 bg-opacity-20 flex-col justify-center items-center gap-2 p-2 hidden group-hover:flex transition-all transform duration-300'>
        <h3 className='text-xl'>{name || ''}</h3>
        <p className='text-xs text-center'>{description || ''}</p>
        <div className='flex justify-between items-center w-full px-2'>
          <Link
            href={previewUrl || '/'}
            target='_blank'
            className='py-2 px-4 rounded-full bg-green-500 text-white dark:bg-orange-400 dark:text-black text-sm hover:bg-green-400 flex'
          >
            Preview <HiOutlineExternalLink className='text-lg ml-1' />
          </Link>
          <Link
            href={githubUrl || '/'}
            target='_blank'
            className='py-2 px-4 rounded-full bg-green-500 text-white dark:bg-orange-400 dark:text-black text-sm hover:bg-green-400 flex'
          >
            Github <HiOutlineExternalLink className='text-lg ml-1' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
