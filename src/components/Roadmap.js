import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from '@/components/LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl dark:text-primaryDark sm:text-xl xs:text-lg'>{position}</h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Roadmap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>2024</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Launch Mbegu 1.0'
            time='Q1 2024'
            address='Dar es Salaam, Tanzania'
            work='Upgrade the Mbegu platform with new features, improved user experience, and enhanced performance to better serve our community of creators and investors.'
          />
          <Details
            position='Expand incubation programs'
            time='Q2 2024'
            address='Dar es Salaam, Tanzania'
            work='Develop and implement new incubation programs to provide comprehensive support and resources for startups at various stages of growth.'
          />
          <Details
            position='Introduce Mbegu Marketplace'
            time='Q3 2024'
            address='Dar es Salaam, Tanzania'
            work='Create a marketplace within the Mbegu platform to facilitate the buying and selling of products and services developed by our community of creators.'
          />
          <Details
            position='Launch Mbegu Academy'
            time='Q4 2024'
            address='Dar es Salaam, Tanzania'
            work='Establish an educational platform offering courses, workshops, and resources to empower aspiring entrepreneurs and creators with the knowledge and skills needed to succeed.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
