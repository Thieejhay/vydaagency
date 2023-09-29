import React from 'react';
import bg from '../assets/Team1.png';
import bg3 from '../assets/Team3.png';
import bg4 from '../assets/Team4.png';
import bg2 from '../assets/Team2.png';
import Temi from '../assets/Temi1.png';
import Sayo from '../assets/Sayo.png';
import Marta from '../assets/Marta1.png';
import Sam from '../assets/Sam1.png';

const Team = () => {
  return (
    <div className='flex flex-col w-screen lg:h-screen pb-3 lg:pb-0' id='team'>
        <div className='flex lg:flex-row flex-col'>
            <div className='flex relative basis-1/2 h-full'>
                <span className='bg-black w-full lg:h-[30rem] h-[40rem] lg:flex hidden'>
                    <img src={bg} alt='' className='w-full lg:h-[30rem] h-[40rem] opacity-20'></img>
                </span>
                <span className='bg-black w-full md:h-[47rem] h-[43rem] lg:hidden flex'>
                    <img src={bg3} alt='' className='w-full md:h-[47rem] h-[43rem] opacity-20'></img>
                </span>
                <div className='flex flex-col lg:gap-3 gap-1 text-[#ffffff] absolute lg:top-20 top-2 lg:left-52 md:left-28 left-16'>
                    <span className='uppercase w-fit lg:px-6 px-4 py-2 lg:py-4 bg-[#273773] text-lg font-medium text-[#ffffff] rounded-tr-3xl rounded-bl-3xl font-gilroyy'>Team</span>
                    <div className='flex flex-col'>
                        <span className='lg:text-3xl text-xl font-gilroy lg:font-gilroyy'>Meet the Team</span>
                        {/* <span className='lg:text-3xl text-xl font-gilroy lg:font-gilroyy'>team members</span> */}
                    </div>
                </div>
            </div>
            <div className='flex relative basis-1/2 h-full'>
                <span className='bg-black w-full lg:h-[30rem] h-[40rem] lg:flex hidden'>
                    <img src={bg2} alt='' className='w-full lg:h-[30rem] h-[40rem] opacity-20'></img>
                </span>
                <span className='bg-black w-full md:h-[20rem] h-[43rem] md:hidden flex'>
                    <img src={bg4} alt='' className='w-full md:h-[20rem] h-[43rem] opacity-20'></img>
                </span>
            </div>
        </div>
        <div className='flex lg:flex-row flex-wrap lg:gap-4 gap-2 justify-center items-center lg:-mt-64 md:-mt-[39rem] -mt-[78rem]'>
            <div className='flex flex-col pt-2 lg:px-2 px-4 lg:pb-4 pb-1 w-fit h-fit bg-[#ffffff] lg:gap-2 gap-1 drop-shadow-2xl'>
                <span className='lg:w-52 lg:h-52 h-60 w-60'>
                    <img src={Sayo} alt='' className='w-full h-full'></img>
                </span>
                <span className='flex flex-col lg:gap-2 items-center'>
                    <span className='text-xl font-normal text-[#273773]'>Sayo Johnson</span>
                    <span className='text-base font-light text-[#000000]/50'>Brand Strategist</span>
                </span>
            </div>
            <div className='flex flex-col pt-2 lg:px-2 px-4 lg:pb-4 pb-1 w-fit h-fit bg-[#ffffff] lg:gap-2 gap-1 drop-shadow-2xl'>
                <span className='lg:w-52 lg:h-52 h-60 w-60'>
                    <img src={Temi} alt='' className='w-full h-full'></img>
                </span>
                <span className='flex flex-col lg:gap-2 items-center'>
                    <span className='text-xl font-normal text-[#273773]'>Temi Tijani</span>
                    <span className='text-base font-light text-[#000000]/50'>Account Director</span>
                </span>
            </div>
            <div className='flex flex-col pt-2 lg:px-2 px-4 lg:pb-4 pb-1 w-fit h-fit bg-[#ffffff] lg:gap-2 gap-1 drop-shadow-2xl'>
                    <span className='lg:w-52 lg:h-52 h-60 w-60'>
                        <img src={Sam} alt='' className='w-full h-full flex items-center'></img>
                    </span>
                    <span className='flex flex-col lg:gap-2 items-center'>
                        <span className='text-xl font-normal text-[#273773]'>Samuel Fayemi</span>
                        <span className='text-base font-light text-[#000000]/50'>Lead Designer</span>
                    </span>
            </div>
            <div className='flex flex-col pt-2 lg:px-2 px-4 lg:pb-4 pb-1 w-fit h-fit bg-[#ffffff] lg:gap-2 gap-1 drop-shadow-2xl'>
                    <span className='lg:w-52 lg:h-52 h-60 w-60'>
                        <img src={Marta} alt='' className='w-full h-full'></img>
                    </span>
                    <span className='flex flex-col lg:gap-2 items-center'>
                        <span className='text-xl font-normal text-[#273773]'>Martha Agbortian</span>
                        <span className='text-base font-light text-[#000000]/50'>Intern</span>
                    </span>
            </div>
        </div>
    </div>
  )
}

export default Team;