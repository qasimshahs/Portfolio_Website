import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({title, index, icon}) => {
  return(
    <Tilt className="w-full xs:w-[250px]">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
    className="w-full p-1 green-pink-gradient rounded-[20px] shadow-card">    
      <div options={{
        max: 45,
        scale: 1,
        speed: 450
      }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        <h1 className="text-white text-[20px] font-bold text-center">{title}</h1>

      </div>
          </motion.div>
          </Tilt>
  );
}



const About = () => {
  return (
    <>
      <motion.div  className="mt-20">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p className="text-[17px] text-secondary mt-4 leading-[30px] max-w-7xl">
        I'm a skilled software developer with experinace in Typescript and Javascript, and expertise in frameworks like React, Node.js and Three.js. I'm quick learning and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas  to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
      </div>


    </>  
  )
}

export default SectionWrapper (About, "about")