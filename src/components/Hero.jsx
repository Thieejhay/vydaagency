import React, {useState} from 'react';
import HeroSlider, { Overlay, Slide} from "hero-slider";
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../assets/Logo.png';
import Banner from '../assets/Results.png';
import Banner1 from '../assets/Strategy.png';
import Banner2 from '../assets/Create.png';
import {HiOutlineMenu} from 'react-icons/hi';
import {CgClose} from 'react-icons/cg';
import { motion } from 'framer-motion';


const Hero = () => {

    const[toggleMenu, setToggleMenu] = useState(false)

  return (
    <div id='home'>
        <HeroSlider
            height={"100vh"}
            className='lg:flex hidden'
            autoplay={{
                autoplayDuration: 5000
            }}
            accessibility={{

            }}
            controller={{
                initialSlide: 1,
                slidingDuration: 700,
                slidingDelay: 50,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                            previousSlide,
                            nextSlide
                        ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}>
            <Overlay>
                <div className='flex justify-center '>
                    <div className='flex gap-12 lg:w-[62rem] w-screen px-4 lg:px-0 lg:justify-center h-16 items-center lg:bg-white/80 rounded-b-lg boder'>
                        <span><img src={Logo} alt='' className='w-32 h-10'></img></span>
                        <div className='lg:flex hidden gap-16 justify-center'>
                            <Link to='#home' smooth><span className='uppercase textsms font-medium text-[#273773] font-gilroy cursor-pointer'>Home</span></Link>
                            <Link to='#about' smooth><span className='uppercase text-sm font-medium text-[#273773] font-gilroy cursor-pointer'>About us</span></Link>
                            <Link to='#services' smooth><span className='uppercase text-sm font-medium text-[#273773] font-gilroy cursor-pointer'>our services</span></Link>
                            <Link to='#team' smooth><span className='uppercase text-sm font-medium text-[#273773] font-gilroy cursor-pointer'>our team</span></Link>
                            <Link to='#clients' smooth><span className='uppercase text-sm font-medium text-[#273773] font-gilroy cursor-pointer'>clients</span></Link>
                            <Link to='#contact' smooth><span className='uppercase text-sm font-medium text-[#273773] font-gilroy cursor-pointer'>contact</span></Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-end h-full pb-20'>
                    <div className='flex flex-col text-[#ffffff] py-2 px-12 border-2 border-[#ffffff] rounded-full tracking-wide hover:bg-[#ffffff] bg-[#273773] hover:text-[#273773] hover:duration-300 hover:border-none'>
                        <span className='uppercase text-lg font-medium flex justify-center font-gilroy'>have a project?</span>
                        <span className='text-sm font-light flex justify-center font-gilroy'>We Can Help</span>
                    </div>
                </div>
            </Overlay>
            
            <Slide
                background={{
                 backgroundImageSrc: Banner
                }}
            />
            <Slide
                background={{
                 backgroundImageSrc: Banner1
                }}
            />
            <Slide
                background={{
                 backgroundImageSrc: Banner2,
                }}
            />
            {/* <MenuNav /> */}
        </HeroSlider>
        <HeroSlider
            height={"100vh"}
            className='flex lg:hidden'
            autoplay={{
                autoplayDuration: 5000
            }}
            accessibility={{

            }}
            controller={{
                initialSlide: 1,
                slidingDuration: 700,
                slidingDelay: 50,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                            previousSlide,
                            nextSlide
                        ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}>
            <Overlay>
                <div className='flex justify-center w-screen'>
                    <div className='flex gap-12 lg:w-[62rem] w-full px-4 lg:px-0 justify-between h-16 items-center lg:bg-white rounded-b-lg boder'>
                        <span><img src={Logo} alt='' className='w-32 h-10'></img></span>
                        <div className='flex '>
                            <span>
                                <HiOutlineMenu className='text-[#273773] text-5xl' onClick = {() => {setToggleMenu(true)}}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-end h-full pb-20 w-full'>
                    <div className='flex flex-col text-[#ffffff] lg:py-2 py-4 px-4 lg:px-2 p border-2 border-[#ffffff] rounded-full tracking-wide hover:bg-[#ffffff] bg-[#273773] hover:duration-300 hover:border-none'>
                        <span className='uppercase lg:text-base text-sm font-normal flex justify-center font-gilroy '>have a project?</span>
                        <span className='lg:text-sm text-xs font-light flex justify-center font-gilroy'>We Can Help</span>
                    </div>
                </div>
            </Overlay>
            
            <Slide
                background={{
                 backgroundImageSrc: Banner
                }}
            />
            <Slide
                background={{
                 backgroundImageSrc: Banner1
                }}
            />
            <Slide
                background={{
                 backgroundImageSrc: Banner2
                }}
            />
            {/* <MenuNav /> */}
        </HeroSlider>
        {
            toggleMenu && (
                <motion.div className="flex flex-col text-start z-50 top-0 px-4 pt-4 fixed w-screen lg:hidden h-[33rem] rounded-l bg-white" initial={{ x:'100vw'}}
                animate={{ x: 0}} transition={{type: 'spring', duration: 2, bounce: 0.3}}>
                    <CgClose className='mb-2 text-[#273773] text-5xl'onClick = {() => {setToggleMenu(false)}}/>
                    <span className="flex items-center justify-center mb-9">
                        <img src={Logo} alt="" className="h-10 w-32"></img>
                    </span>
                        <span className="text-[#273773] text-2xl font-semibold mb-6 pl-3">Home</span>
                        <Link to='#about' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}>  
                            <span className="text-[#000000]/70 text-2xl font-semibold mb-6">About us</span>
                        </Link>
                        <Link to='#services' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}>
                        <span className="text-[#000000]/70 text-2xl font-semibold mb-6">Our Services</span>
                        </Link>
                        <Link to='#team' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}><span className="text-[#000000]/70 text-2xl font-semibold mb-6">Our Team</span></Link>
                        <Link to='#business' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}><span className="text-[#000000]/70 text-2xl font-semibold mb-6">Clients</span></Link>
                        <Link to='#business' smooth className="mb-6 pl-3" onClick = {() => {setToggleMenu(false)}}><span className="text-[#000000]/70 text-2xl font-semibold mb-6">Contacts</span></Link>
                    
                        
                </motion.div>
            )
        }
    </div>    
        

  )
}

export default Hero;