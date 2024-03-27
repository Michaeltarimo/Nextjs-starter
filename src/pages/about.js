import React, { useEffect, useRef } from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Realms from '@/components/Realms';
import Roadmap from '@/components/Roadmap'
import R2025 from '@/components/R2025'
import Head from 'next/head';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import profilePic from "../../public/images/profile/developer-pic-21.png";
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>My react starter</title>
        <meta name="description" content="For Visionary Contents Creators." />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Inspiration Sparks Actions" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Background</h2>
              <p className='font-medium'>
              Blah blah              
              </p>
              <p className='my-4 font-medium'>
              Another blah blah
              </p>
              <p className='font-medium'>
                Just Blah blah
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="Mbegu Logo" className='w-full h-auto rounded-2xl' 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers value={32681} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Raised TZS</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers value={46} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-3xl'>
                  <AnimatedNumbers value={321} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Investors</h2>
              </div>
            </div>
          </div>


          <Realms />

          <Roadmap />

          <R2025 />


        </Layout>
      </main>
    </>
  );
};

export default About;
