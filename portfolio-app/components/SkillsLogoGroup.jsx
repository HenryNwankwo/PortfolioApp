import SkillsLogo from './SkillsLogo';

const SkillsLogoGroup = () => {
  return (
    <>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1690989018/skills-images/react-2_pxu8np.svg'
        }
        imageAlt={'ReactJS'}
        classnames={'absolute right-10 top-10 opacity-30'}
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1690989014/skills-images/tailwindcss_ytbeze.svg'
        }
        imageAlt={'Tailwindcss'}
        classnames={'absolute -right-4 bottom-20 opacity-30'}
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1691150864/skills-images/icons8-node-js_h1kcaz.svg'
        }
        imageAlt={'NodeJS'}
        classnames={'absolute -left-6 top-20 opacity-30'}
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1691150493/skills-images/icons8-tableau-software_deghp9.svg'
        }
        imageAlt={'Tableau'}
        classnames={'absolute -left-1 bottom-32 sm:bottom-28 opacity-30'}
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1691150493/skills-images/icons8-nextjs_izhuzj.svg'
        }
        imageAlt={'NextJS'}
        classnames={'absolute left-16 top-58 opacity-30'}
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1690989015/skills-images/mysql-logo_r1ky9m.svg'
        }
        imageAlt={'MySQL'}
        classnames={
          'absolute right-14 sm:right-5 lg:right-1/3 top-60 opacity-30'
        }
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1691150494/skills-images/icons8-rstudio_f7mfrk.svg'
        }
        imageAlt={'R Studio'}
        classnames={
          'absolute right-1/4 -bottom-20 opacity-30 hidden sm:flex w-44 h-44'
        }
        imageHeight={250}
        imageWidth={250}
      ></SkillsLogo>
    </>
  );
};

export default SkillsLogoGroup;
