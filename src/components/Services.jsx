import React from 'react';
import Icon from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import {BsDot} from 'react-icons/bs';
import { HashLink as Link } from 'react-router-hash-link';


const Services = () => {
  return (
    <div className='flex flex-col w-screen bg-[#ffffff] lg:pt-20 pt-12 lg:pb-12 pb-7 lg:gap-10 gap-5 font-gilroy' id='services'>
        <div className='flex flex-col lg:gap-3 gap-2 w-full items-center'>
            <span className='uppercase lg:text-4xl text-2xl font-black text-[#273773] font-gilroyy'>list of services</span>
            <span className='text-base font-light text-[#000000]/60 font-gilroy text-center lg:px-32 px-4'>Explore our extensive array of services, which has been professionally handpicked to help you enhance your company and succeed in today's changing environment. Learn how our strategic excellence, innovation, and unrelenting dedication can fuel your success.</span>
        </div>
        <div className='flex lg:flex-row md:flex-row md:flex-wrap flex-col w-full items-center justify-center gap-4'>
            <div className='flex flex-col pl-8 pr-6 py-8 gap-8 w-[22rem] h-[25rem] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-3xl hover:bg-[#273773] hover:duration-500 text-[#000000]/70 hover:text-[#ffffff]'>
                <div className='flex gap-4'>
                    <span className='w-12 h-12'><img src={Icon} alt='' className='w-full h-full'></img></span>
                    <span className='uppercase text-xl font-medium flex items-center font-gilroyy'>Creative</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Logos</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Brand identity</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Promotional assets</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Templates</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Video production</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pl-8 py-8 gap-8 w-[22rem] h-[25rem] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-3xl hover:bg-[#273773] hover:duration-500 text-[#000000]/70 hover:text-[#ffffff]'>
                <div className='flex gap-4'>
                    <span className='w-12 h-12'><img src={Icon2} alt='' className='w-full h-full'></img></span>
                    <span className='uppercase text-xl font-medium flex items-center font-gilroyy'>STRATEGY</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Public Relations</span>
                    </div>
                     <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Corporate Communication</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Brand planning & Positioning</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'> Digital & Media Strategy</span>
                    </div>
                    {/* <div className='flex gap-2'>
                        <span className='text-base font-bold'>.</span>
                        <span className='text-lg font-semibold uppercase font-gilroy'> Media Strategy</span>
                    </div> */}
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>SEO & SEM</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Lead & Client Generation</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Campaign Management</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pl-8 pr-16 py-8 h-[25rem] shadow-[0_3px_8px_rgba(0,0,0,0.24)] gap-8 w-[22rem] rounded-3xl hover:bg-[#273773] hover:duration-500 text-[#000000]/70 hover:text-[#ffffff]'>
                <div className='flex gap-4'>
                    <span className='w-12 h-12'><img src={Icon3} alt='' className='w-full h-full'></img></span>
                    <span className='uppercase text-xl font-medium flex items-center font-gilroyy'>Development</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='textbaseg font-light'><span className='text-lg font-semibold uppercase font-gilroy'>Brand</span></span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-base font-light'><span className='text-lg font-semibold uppercase font-gilroy'>Website</span></span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Social + Digital media</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Traditional media + advertising</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Event production</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroy'>Campaign creation</span>
                    </div>
                </div>
            </div>
        </div>
        <Link to='#contact' smooth>
            <div className='flex lg:justify-end justify-center lg:pr-32 lg:-mt-4 md:-mt-2'>
                <span className='p-4 text-base font-normal bg-[#273773] text-[#ffffff] rounded-full w-fit'>Learn more</span>
            </div>
        </Link> 
    </div>
  )
}

export default Services;