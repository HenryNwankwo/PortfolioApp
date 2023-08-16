import Image from 'next/image';

const SkillsLogo = ({
  imageSrc,
  imageAlt,
  classnames,
  imageHeight,
  imageWidth,
}) => {
  const imgWidth = imageWidth || 60;
  const imgHeight = imageHeight || 60;
  return (
    <div
      className={`h-16 w-16 bg-slate-100 dark:bg-gray-800 shadow-2xl shadow-green-500 dark:shadow-slate-900 rounded-full flex items-center justify-center ${classnames}`}
    >
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
};

export default SkillsLogo;
