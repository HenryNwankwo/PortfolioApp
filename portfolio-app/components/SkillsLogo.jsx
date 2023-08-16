import Image from 'next/image';

const SkillsLogo = ({ imageSrc, imageAlt, classnames }) => {
  return (
    <div
      className={`h-16 w-16 shadow-2xl shadow-green-500 dark:shadow-slate-900 rounded-full flex items-center justify-center ${classnames}`}
    >
      <Image alt={imageAlt} src={imageSrc} width={60} height={60} />
    </div>
  );
};

export default SkillsLogo;
