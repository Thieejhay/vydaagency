import React from 'react';
import Image1 from '../assets/logo/Image 1.png'
import Image2 from '../assets/logo/Image 2.png'
import Image3 from '../assets/logo/Image 3.png'
import Image4 from '../assets/logo/Image 4.png'
import Image5 from '../assets/logo/Image 5.png'
import Image6 from '../assets/logo/Image 6.png' 
import Image7 from '../assets/logo/Image 7.png'
import Image8 from '../assets/logo/Image 8.png'
import Image9 from '../assets/logo/Image 9.png'
import Image10 from '../assets/logo/Image 10.png'
import Image11 from '../assets/logo/Image 11.png'
import Image12 from '../assets/logo/Image 12.png'
import Image13 from '../assets/logo/Image 13.png'
import Image14 from '../assets/logo/Image 14.png'
import Image15 from '../assets/logo/Image 15.png'
import Image16 from '../assets/logo/Image 16.png'
import Image17 from '../assets/logo/Image 17.png'
import Image18 from '../assets/logo/Image 18.png'


const Client = () => {

  return (
    <div className='flex flex-col w-screen pb-6 lg:pt-20 pt-16 gap-2 font-gilroy' id='clients'>
        <div className='flex flex-col gap-1 w-full items-center px-6'>
            <span className='uppercase lg:text-4xl text-2xl font-semibold text-[#273773] lg:mb-2 font-gilroyy'>Clients</span>
            <span className='lg:text-base text-sm font-light text-[#000000]/60 text-center'>No matter where you start, we're here to help. Here are some brands we've collaborated with.</span>
            <span className='lg:text-base text-sm font-light text-[#000000]/60 text-center'>They've experienced our results...you're up next.</span>
        </div>
        <div className='lg:flex hidden flex-col w-full items-center justify-center'>
                <div className='flex lg:gap-4 gap-6 flex-wrap'>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44  justify-center items-center'>
                        <img src={Image1} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[rgb(255,255,255)]'>Plantain Republic</span>
                            <span className='text-xs text-center font-medium text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image2} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>Fiesta of Flavours</span>
                            <span className='text-xs text-center font-medium text-[#ffffff]'>Three day food festival in Lagos, Nigeria. </span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image3} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>Arami</span>
                            <span className='text-xs text-center font-medium text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image4} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Cloverleaf Catering Co.</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image5} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Maldesa Nigeria Ltd</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'>Indian Cuisine, Gourmet Small Chops and Drinks services.</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image7} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Temple School</span>
                            <span className='text-xs text-center font-medium text-[#ffffff]'></span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-4 gap-3'>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image6} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>Polaris Bank</span>
                            <span className='text-xs text-center font-medium text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image8} alt='' className='lg:w-32 lg:h-24 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>Copa Lagos</span>
                            <span className='text-xs text-center font-normal text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image9} alt='' className='lg:w-32 lg:h-20 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>bCode</span>
                            <span className='text-xs text-center font-normal text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex relative lg:w-44 w-20 h-20 rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image10} alt='' className='lg:w-32 lg:h-11 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>Funke Adepoju</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'>A fashion brand - Bespoke and ready to wear.</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image11} alt='' className='lg:w-32 lg:h-12 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff] text-center px-1'>Carmacon Media Ltd</span>
                            <span className='text-xs text-center  px-2 font-medium text-[#ffffff]'>A multimedia company founded by Cornelia O'dwyer. </span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image12} alt='' className='lg:w-32 lg:h-12 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>Platform Capital</span>
                            <span className='text-xs text-center px-2 font-medium text-[#ffffff]'>Platform Capital is an Investment and Advisory firm.</span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-4 gap-3'>
                    <div className='flex relative lg:w-44 w-20 h-20 rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image13} alt='' className='lg:w-32 lg:h-24 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Maidstone Energy</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image14} alt='' className='lg:w-32 lg:h-16 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>CHEF mayo's grill</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image15} alt='' className='lg:w-32 lg:h-16 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>AHO</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image16} alt='' className='lg:w-32 lg:h-20 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>The Hairmasters Studio</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'>Luxury hair brand</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image17} alt='' className='lg:w-32 lg:h-16 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>NORD</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'></span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-20 h-20 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image18} alt='' className='lg:w-32 lg:h-20 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Putovati</span>
                            <span className='text-xs text-center font-medium px-2 text-[#ffffff]'></span>
                        </div>
                    </div>
                </div>
        </div>
        <div className='flex lg:hidden flex-col w-full items-center justify-center'>
                <div className='flex lg:gap-4'>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44  justify-center items-center'>
                        <img src={Image1} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[rgb(255,255,255)]'>Plantain Republic</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image2} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center text-[#ffffff]'>Fiesta of Flavours</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image3} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>Arami</span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-4'>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image4} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Cloverleaf Catering Co.</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image5} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Maldesa Nigeria Ltd</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image7} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Temple School</span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-4'>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image6} alt='' className='lg:w-32 lg:h-28 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center text-[#ffffff]'>Polaris Bank</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image8} alt='' className='lg:w-32 lg:h-24 w-20 h-20'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center text-[#ffffff]'>Copa Lagos</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image9} alt='' className='lg:w-32 lg:h-20 w-20 h-12'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff]'>bCode</span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-4'>
                    <div className='flex relative lg:w-44 w-28 h-28 rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image10} alt='' className='lg:w-32 lg:h-11 w-20 h-8'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center text-[#ffffff]'>Funke Adepoju</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image11} alt='' className='lg:w-32 lg:h-12 w-20 h-8'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-[#ffffff] text-center px-1'>Carmacon Media Ltd</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image12} alt='' className='lg:w-32 lg:h-12 w-20 h-8'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center text-[#ffffff]'>Platform Capital</span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-4 gap-3'>
                    <div className='flex relative lg:w-44 w-28 h-28 rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image13} alt='' className='lg:w-32 lg:h-24 w-20 h-12'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Maidstone Energy</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image14} alt='' className='lg:w-32 lg:h-16 w-20 h-12'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>CHEF mayo's grill</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image15} alt='' className='lg:w-32 lg:h-16 w-20 h-8'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>AHO</span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:gap-4'>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image16} alt='' className='lg:w-32 lg:h-20 w-20 h-12'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>The Hairmasters Studio</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28 relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image17} alt='' className='lg:w-32 lg:h-16 w-20 h-12'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>NORD</span>
                        </div>
                    </div>
                    <div className='flex lg:w-44 w-28 h-28  relative rounded-full lg:h-44 justify-center items-center'>
                        <img src={Image18} alt='' className='lg:w-32 lg:h-20 w-20 h-12'></img>
                        <div className='flex w-full h-full flex-col gap-2 bg-[#273773]/95 items-center justify-center rounded-full absolute opacity-0 hover:opacity-100 duration-500 top-0 left-0 right-0 bottom-0'>
                            <span className='text-lg font-semibold text-center px-2 text-[#ffffff]'>Putovati</span>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Client;