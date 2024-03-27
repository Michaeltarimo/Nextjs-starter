import React, {useRef} from 'react';
import {motion, useScroll } from "framer-motion";
import LiIcon from '@/components/LiIcon';

const Details = ({ type, time, place, info }) => {
	const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center md:w-[80%]'>

    <LiIcon  reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      	>
        <h3 className='capitalize font-bold text-2xl dark:text-primaryDark sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};

const R2025 = () => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll(
	{
		target: ref,
		offset: ["start end", "center start"]
	}
	)
  return (
    <div className='my-64'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>2025</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div
style={{scaleY: scrollYProgress}}
 className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

          <Details
			  type="Launch Mbegu Mobile App"
			  time="Q1 2025"
			  place="Dar es Salaam, Tanzania"
			  info="Develop and release a mobile application for Mbegu to provide users with access to our platform on the go, enhancing convenience and accessibility."
			/>

		<Details
		  type="Expand Investor Network"
		  time="Q2 2025"
		  place="Dar es Salaam, Tanzania"
		  info="Grow and diversify our network of investors to attract more funding opportunities for startups and projects incubated on the Mbegu platform."
		/>

		<Details
		  type="Enhance AI-powered Tools"
		  time="Q3 2025"
		  place="Dar es Salaam, Tanzania"
		  info="Further develop and optimize our AI-powered tools, including powerful AI's available for pitch creation and evaluation, to provide creators with more robust and accurate support."
		/>

		<Details
		  type="Launch Mbegu Community Forum"
		  time="Q4 2025"
		  place="Dar es Salaam, Tanzania"
		  info="Introduce a community forum within the Mbegu platform to foster collaboration, networking, and knowledge-sharing among our community of creators, investors, and supporters."
		/>



        </ul>
      </div>
    </div>
  );
};

export default R2025;
