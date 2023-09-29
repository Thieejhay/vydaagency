import React from 'react';
import Aboutt from '../assets/About.png'
import Shape from '../assets/About shape.png'

const About = () => {
  return (
    <div className='flex flex-col bg-[#ffffff] w-screen h-fit lg:pt-8 pt-12 lg:gap-2 relative' id='about'>
        <div className='flex lg:pl-[8rem] pl-6 mb-4'>
            <span className='uppercase lg:px-16 px-6 lg:py-6 py-4 bg-[#273773] text-lg font-medium text-[#ffffff] rounded-tr-3xl rounded-bl-3xl font-gilroy'>About us</span>
        </div>
        <div className='flex lg:flex-row flex-col lg:gap-16 gap-4 lg:pl-[8rem] pl-6'>
            <div className='flex flex-col lg:w-[26rem] md:w-[38rem] gap-3'>
                <span className='text-[#000000]/90 text-2xl lg:text-2xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>Your go to agency,</span>
                <span className='text-[#000000]/90 text-2xl lg:text-2xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>providing marketing,</span>
                <span className='text-[#000000]/90 text-2xl lg:text-2xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>business support solutions.</span>
                <span className='text-[#000000]/90 text-2xl lg:text-2xl tracking-wide font-semibold [word-spacing:px] font-gilroyy'>Creative {'>'} PR {'>'} Strategy</span>
            </div>
            <div className='flex flex-col lg:w-[40rem] md:w-fit pr-5 lg:pr-0 gap-2'>
                <span className='text-[#000000]/60 text-xl md:text-lg lg:text-lg font-normal font-gilroy'>Vyda Agency isn't just a marketing agency; it's a powerhouse of creativity, PR mastery, and strategic brilliance. We don't just provide services; we equip our clients with a toolkit that empowers them to focus on what truly matters - realizing their full potential.
                </span>
                <span className='text-[#000000]/60 text-xl md:text-lg lg:text-lg font-normal font-gilroy '>Our expertise lies in delivering a comprehensive approach to both local and global clients who demand nothing short of rapid, specialized, and top-tier services. We understand the pace of modern business, and we're here to ensure you not only keep up but surge ahead.
                </span>
                <span className='text-[#000000]/60 text-xl md:text-lg lg:text-lg font-normal font-gilroy z-10 '>At Vyda Agency, we're not just about services - we're about transformation. We're about revealing the latent potential within your brand, harnessing the power of creativity, publicity, and strategy to catapult you to new heights. Our commitment is to enable businesses, both local and international, with the tools and expertise needed to not just survive, but to thrive.
                </span>
                <span className='text-[#273773] lg:text-2xl text-xl font-medium lg:w-[23rem] font-gilroyy italic mt-3 z-10'>"Giving you the time to maximize the full potential of your entity."</span>
                <span className='flex flex-col mt-1 z-10'>
                    <span className='text-[#000000] text-2xl font-medium font-gilroyy'>Sayo Johnson</span>
                    <span className='uppercase text-[#000000]/80 text-lg font-medium font-gilroy'>director</span>
                </span>
            </div>
        </div>
        <div className='flex flex-col lg:pl-[8rem] gap-0 px-4 lg:px-0 z-10 mt-5 md:mt-4 lg:-mt-[19rem] w-screen'>
            <span className='lg:w-[28rem] md:w-[32rem] w-full rounded-md'>
                <img src={Aboutt} alt='' className='w-full h-full'></img>
            </span>

        </div>
        <div className='flex absolute -bottom-12 z-0'>
            <img src={Shape} alt='' className='w-screen'></img>
        </div>
    </div>
  )
}

export default About;