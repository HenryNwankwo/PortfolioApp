'use client';
import { usePtfContext } from '@/utils/PtfContext';

const ImageBlob = ({ classnames }) => {
  const { theme } = usePtfContext();
  return (
    <div
      className={`sm:hidden w-full h-auto flex items-center justify-center mb-10 ${classnames}`}
    >
      <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill={theme == 'light' ? '#22C55E' : '#FDDD7A'}
          d='M55.9,-64.9C69,-55.6,73.8,-34.8,75.5,-14.9C77.1,5,75.6,23.9,66.6,37.7C57.7,51.5,41.4,60.3,25.7,62.5C9.9,64.8,-5.3,60.7,-15.2,52.4C-25,44.2,-29.4,31.8,-37.5,20.4C-45.7,8.9,-57.6,-1.7,-60.3,-14.9C-63.1,-28.2,-56.7,-44.1,-45.1,-53.6C-33.6,-63.2,-16.8,-66.4,2.3,-69.2C21.4,-71.9,42.8,-74.2,55.9,-64.9Z'
          transform='translate(100 100)'
        />
      </svg>
    </div>
  );
};

export default ImageBlob;
