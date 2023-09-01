import React from 'react';
import Icon from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import {BsDot} from 'react-icons/bs';


const Services = () => {
  return (
    <div className='flex flex-col w-screen bg-[#ffffff] lg:pt-20 pt-12 lg:pb-12 pb-10 gap-12 font-gilroy' id='services'>
        <div className='flex flex-col gap-3 w-full items-center'>
            <span className='uppercase lg:text-4xl text-2xl font-black text-[#273773] font-gilroyy'>list of services</span>
            <span className='text-base font-light text-[#000000]/60 font-gilroy text-center px-3'>We will help a client's problems to develop the products they have with high quality</span>
        </div>
        <div className='flex lg:flex-row flex-col w-full items-center justify-center gap-4'>
            <div className='flex flex-col pl-8 pr-6 py-8 gap-8 w-[22rem] h-[25rem] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-3xl hover:bg-[#273773] hover:duration-500 text-[#000000]/70 hover:text-[#ffffff]'>
                <div className='flex gap-4'>
                    <span className='w-12 h-12'><img src={Icon} alt='' className='w-full h-full'></img></span>
                    <span className='uppercase text-xl font-medium flex items-center'>Creative</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Logos</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Brand identity</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Promotional assets</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Templates</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Video production</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pl-8 py-8 gap-8 w-[22rem] h-[25rem] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-3xl hover:bg-[#273773] hover:duration-500 text-[#000000]/70 hover:text-[#ffffff]'>
                <div className='flex gap-4'>
                    <span className='w-12 h-12'><img src={Icon2} alt='' className='w-full h-full'></img></span>
                    <span className='uppercase text-xl font-medium flex items-center'>STRATEGY</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Public Relations</span>
                    </div>
                     <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Corporate Communication</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Brand planning & Positioning</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'> Digital & Media Strategy</span>
                    </div>
                    {/* <div className='flex gap-2'>
                        <span className='text-base font-bold'>.</span>
                        <span className='text-lg font-semibold uppercase font-gilroy'> Media Strategy</span>
                    </div> */}
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>SEO & SEM</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Lead & Client Generation</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Campaign Management</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pl-8 pr-16 py-8 h-[25rem] shadow-[0_3px_8px_rgba(0,0,0,0.24)] gap-8 w-[22rem] rounded-3xl hover:bg-[#273773] hover:duration-500 text-[#000000]/70 hover:text-[#ffffff]'>
                <div className='flex gap-4'>
                    <span className='w-12 h-12'><img src={Icon3} alt='' className='w-full h-full'></img></span>
                    <span className='uppercase text-xl font-medium flex items-center'>Development</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='textbaseg font-light'><span className='text-lg font-semibold uppercase font-gilroyy'>Brand</span></span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-base font-light'><span className='text-lg font-semibold uppercase font-gilroyy'>Website</span></span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Social + Digital media</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Traditional media + advertising</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Event production</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className='flex items-center'><BsDot className='w-4'/></span>
                        <span className='text-lg font-semibold uppercase font-gilroyy'>Campaign creation</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end pr-32 lg:-mt-4 -mt-6'>
            <span className='p-4 text-base font-normal bg-[#273773] text-[#ffffff] rounded-full w-fit'>Learn more</span>
        </div>
    </div>
  )
}

export default Services;