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
        classnames={'absolute right-0 opacity-30'}
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
        classnames={'absolute left-5 opacity-30'}
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1691150493/skills-images/icons8-nextjs_izhuzj.svg'
        }
        imageAlt={'NextJS'}
        classnames={'absolute left-16 top-64 opacity-30'}
      ></SkillsLogo>
      <SkillsLogo
        imageSrc={
          'https://res.cloudinary.com/dxrmhv6fy/image/upload/v1690989015/skills-images/mysql-logo_r1ky9m.svg'
        }
        imageAlt={'MySQL'}
        classnames={'absolute left-12 top-40 opacity-30'}
      ></SkillsLogo>
    </>
  );
};

export default SkillsLogoGroup;
