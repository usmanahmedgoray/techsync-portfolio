import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcons from './LiIcons'

const Detail = ({ Level, Degree, years, School, Board, Marks }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex justify-between flex-col items-start md:w-[80%]'>
            <LiIcons reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-priaryDark'>{Level}</h3>
                <h2 className='font-semibold text-2xl sm:text-xl xs:text-lg text-dark/90  dark:text-light/90'>{School}</h2>
                <span className='text-lg sm:text-base xs:text-sm text-dark/75  dark:text-light/75'>{years} {Board && `| ${Board}`}</span>
                <div className='flex items-cente xs:w-[70vw]'>
                    <h6 className='text-lg sm:text-base xs:text-sm font-medium text-primary dark:text-priaryDark'>Subject :- &nbsp;</h6>
                    <span className='text-lg sm:text-base xs:text-sm font-medium text-dark/75  dark:text-light/75'>{Degree}</span>
                </div>
                <div className='flex items-center'>
                    <h6 className='text-lg sm:text-base xs:text-sm font-medium text-primary dark:text-priaryDark'>Marks/CGPA :- &nbsp;</h6>
                    <span className='text-lg sm:text-base xs:text-sm font-medium text-dark/75  dark:text-light/75'>{Marks}</span>
                </div>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='mt-64 lg:mt-36 xs:mt-24 sm:mb-64'>
            <div className='flex items-center justify-center'>
                <h2 className='font-bold text-8xl m-32 text-center md:text-6xl xs:text-4xl md:mb-16'>
                    Education
                </h2>
            </div>
            <div ref={ref} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 h-full bg-dark dark:bg-light origin-top top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-6 xs:ml-8'>
                    <Detail Level="Bachelor" Degree="B.S Computer Science" years="09/2019 - 09/2023" School="Government College University, Faisalabad." Marks="3.43/4" />
                    <Detail Level="Intermediate" Degree="Fsc (pre-Engineering)" years="08/2017 - 08/2019" School="Superior College Shahkot, Nankana Sahib" Marks="71.72%" Board="BISE Lahore" />
                    <Detail Level="Matriculation" Degree="Matric" years="04/2015 - 07/2017" School="Government Abu al Khair high School Shahkot, Nankana Shahib" Marks="72.36%" Board="BISE Lahore" />
                </ul>
            </div>
        </div>
    )
}

export default Education