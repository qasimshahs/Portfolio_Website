import React from 'react'
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { motion } from 'framer-motion';



const Hero = () => {

  return (
    <>
   <style>
    {`
      .changed::before{
            content: "";
            height: 5rem;
            width: 35%;
            top: 1.1rem;
            animation: custom-animation-g 5s steps(12) infinite
      }

      @keyframes custom-animation-g {
            0% { left: 320px; }
            40% { left: 680px; }
            60% { left: 680px; }
            100% { left: 320px; }
        }

      .changed{
      color: blue
      }
      
    `}
    </style>


    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center gap=5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff] span-tag xxs:block sm:inline
           before:absolute before:border-l-2 before:border-red-500 before:z-10  before:top-[4.5rem] before:h-[3rem] before:w-[40%] before:bg-[#040720] before:animate-custom-animation
           sm:before:top-[1rem] sm:before:h-[3rem] sm:before:w-[25%] sm:before:animate-custom-animation-sm
           md:before:top-[1rem] md:before:h-[3.5rem] md:before:w-[25%] md:before:animate-custom-animation-md
           lg:before:top-[1.5rem] lg:before:h-[4rem] lg:before:w-[25%] lg:before:animate-custom-animation-lg"> Qasim</span></h1>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>I develop 3D visuals, user <br className="sm:block hidden" /> interfaces and web application</p>
        </div>
      </div>

      <ComputersCanvas/>
      <div className="absolute z-30 lg:bottom-[-20px] sm:bottom-[20px] xl:bottom-[-10px] xs:bottom-[-20px]  bottom-[-10px] w-full flex justify-center">
        <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">

         <motion.div
         animate={{y: [0, 24, 0]}}
         transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
         className="w-3 h-3 rounded-full bg-secondary mb-1"/>
        </div>
        </a>
      </div>
    </section>
    </>
  )
}

export default Hero;