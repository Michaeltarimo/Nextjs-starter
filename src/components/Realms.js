import React from 'react';
import { motion } from 'framer-motion';

const Category = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 
      shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 
      md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Realms = () => {
  return (
    <>
      <h2 className='font-bold text-6xl mt-64 w-full text-center md:text-6xl md:mt-32'>Focus</h2>
      <div className='w-full h-screen relative flex items-center justify-center 
      rounded-full bg-circularLight dark:bg-circularDark 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm

      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      '>
        <motion.div
          className='flex items-center justify-center rounded-full 
          font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer 
          dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          Tech
        </motion.div>

        <Category name='Design' x='-28vw' y='2vw' />
        <Category name='Craft' x='-5vw' y='-12vw' />
        <Category name='Art' x='20vw' y='6vw' />
        <Category name='Health' x='0vw' y='12vw' />
        <Category name='Music' x='-20vw' y='-15vw' />
        <Category name='Publishing' x='19vw' y='-12vw' />
        <Category name='Film' x='35vw' y='-5vw' />
        <Category name='Games' x='0vw' y='-20vw' />
        <Category name='Softwares' x='-20vw' y='18vw' />
        <Category name='Events' x='18vw' y='18vw' />
      </div>
    </>
  );
};

export default Realms;
