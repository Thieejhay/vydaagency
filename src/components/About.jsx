import React from 'react';
import Aboutt from '../assets/About.png'
import Shape from '../assets/About shape.png'

const About = () => {
  return (
    <div className='flex flex-col bg-[#ffffff] w-screen lg:h-[44rem] h-fit lg:pt-8 pt-12 lg:gap-2 relative' id='about'>
        <div className='flex lg:pl-[13rem] pl-6 mb-4'>
            <span className='uppercase lg:px-16 px-6 lg:py-6 py-4 bg-[#273773] text-lg font-medium text-[#ffffff] rounded-tr-3xl rounded-bl-3xl font-gilroy'>About us</span>
        </div>
        <div className='flex lg:flex-row flex-col lg:gap-20 gap-4 lg:pl-[13rem] pl-6'>
            <div className='flex flex-col lg:w-[26rem] gap-2'>
                <span className='text-[#000000]/90 text-2xl lg:text-3xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>Your go to agency,</span>
                <span className='text-[#000000]/90 text-2xl lg:text-3xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>providing marketing</span>
                <span className='text-[#000000]/90 text-2xl lg:text-3xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>business support solutions.</span>
                <span className='text-[#000000]/90 text-2xl lg:text-3xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>Creative {'>'} PR {'>'} Strategy</span>
            </div>
            <div className='flex flex-col lg:w-[33rem] pr-5 lg:pr-0 gap-2'>
                <span className='text-[#000000]/60 text-xl font-normal font-gilroy'>Vyda Agnecy strives to maximize the hidden potential within a brand using creativity, publicity and strategy.
                </span>
                <span className='text-[#000000]/60 text-xl font-normal font-gilroy'>We thrive on delivering a holistic approach to local and international clients who demand fast, specialized and professional services, enabling them with the opportunity to continue to grow their business.
                </span>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:gap-12 lg:pl-[13rem] gap-4 px-4 lg:px-0 z-10 mt-5 lg:mt-0'>
            <span className='lg:w-[28rem] h-[17rem] w-full rounded-md'>
                <img src={Aboutt} alt='' className='w-full h-full'></img>
            </span>
            <div className='flex flex-col lg:gap-8 gap-1 lg:h-[17rem] justify-center'>
                <span className='text-[#273773] lg:text-2xl text-xl font-medium lg:w-[23rem] font-gilroyy italic'>"Giving you the time to maximize the full potential of your entity."</span>
                <span className='flex flex-col'>
                    <span className='text-[#000000] text-2xl font-medium font-gilroyy'>Sayo Johnson</span>
                    <span className='uppercase text-[#000000]/80 text-lg font-medium font-gilroy'>director</span>
                </span>
            </div>
        </div>
        <div className='flex absolute -bottom-8 z-0'>
            <img src={Shape} alt='' className='w-screen'></img>
        </div>
    </div>
  )
}

export default About;