import Head from 'next/head'
import React, { useRef } from 'react'
import Layout from './Layout'
import AnimatedText from './Component/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { paginationComponent, loadingScreen, formValidation, modalComponent, higherOrderComponent, redux, todoList, smoothScrolling } from '@/public/Images/Articles/Index'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from './Component/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedArticle = ({ img, summary, time, link, title }) => {
  return (
    <>
      <li className='relative col-span-1 md:col-span-2 w-full p-4 bg-light border border-dark rounded-2xl dark:bg-dark dark:text-light dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] rounded-[2.5rem] rounded-br-2xl h-[103%] bg-dark dark:bg-light' />
        <Link href={link} target="_blank" className='inline-block cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} className='w-full h-auto'
          initial={{opacity:0}}
          whileInView={{opacity:1,transition:{duration:0.2}}}
          />
        </Link>
        <Link href={link} target="_blank" className='cursor-pointer overflow-hidden rounded-lg'>
          <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline hover:underline-offset-2 sm:text-lg'>{title}</h2>
        </Link>
        <p className='text-sm mb-2 xs:text-sm'>
          {summary}
        </p>
        <span className='text-primary dark:text-priaryDark font-semibold'>
          {time}
        </span>
      </li>
    </>
  )
}

const MovingImg = ({ title, link, img }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imageRef = useRef(null)

  function handleMouse(event) {
    imageRef.current.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-6)
  }
  function handleMouseLeave() {
    imageRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }
  return (
    <Link href={link} target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='hover:underline-offset-2 hover:underline font-bold text-xl sm:text-base dark:text-light'>{title}</h2>
      <FramerImage ref={imageRef} src={img} alt={title} className='w-96 lg:w-64 h-auto rounded-lg absolute hidden z-10 md:!hidden'
        style={{x:x,y:y}} priority
        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
      />
    </Link>
  )
}

const Article = ({ img, time, link, title }) => {
  return (
    <>
      <motion.li className='relative w-full p-4 py-6 my-4 list-none rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-8 border-b-8 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
      initial={{y:200}}
      whileInView={{y:0}}
      >
        <MovingImg title={title} link={link} img={img} />
        <span className='text-primary pl-4 dark:text-priaryDark font-semibold sm:self-start sm:pl-0 xs:text-sm'>
          {time}
        </span>
      </motion.li>
    </>
  )
}

const Articles = () => {
  return (
    <>
      <Head>
        <title>Usman Ahmed | Articles Page</title>
        <meta name="description" content="This is Usman Ahmed Goraya Portfolio site and this is Articles page of Usman Ahmed portfolio page " />
      </Head>
      <TransitionEffect/>
      <main className='mb-16 w-full flex flex-col justify-center items-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text="Words Can Change The World!" className='text-8xl mb-16 lg:text-7xl sm:text-6xl sm:mb-8 xs:text-4xl' />
          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link={"/"}
              img={paginationComponent}
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
            Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
            Improve the user experience."
              time="10 min read"
              link={"/"}
              img={loadingScreen}
            />
          </ul>
          <h2 className='text-4xl font-bold w-full text-center my-16 mt-32 lg:text-3xl sm:text-xl text-dark dark:text-light'>All Articles</h2>
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            time="23 March, 2023"
            link="/"
            img={formValidation}
          />
          <Article
            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
            time="23 March, 2023"
            link="/"
            img={modalComponent}
          />
          <Article
            title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
            time="23 March, 2023"
            link="/"
            img={todoList}
          />
          <Article
            title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
            time="23 March, 2023"
            link="/"
            img={smoothScrolling}
          />
          <Article
            title="Redux Simplified: A Beginner's Guide For Web Developers"
            time="23 March, 2023"
            link="/"
            img={redux}
          />
          <Article
            title="What Is Higher Order Component (Hoc) In React?"
            time="23 March, 2023"
            link="/"
            img={higherOrderComponent}
          />
        </Layout>
      </main>
    </>
  )
}

export default Articles