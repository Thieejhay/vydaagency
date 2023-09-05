import React from 'react';
import Logo from '../assets/Logo.png';
import Rec from '../assets/Rectangle.png';
import Rec2 from '../assets/Rectangle2.png';
import Circle from '../assets/Exclusion.png';
import {RiFacebookFill} from 'react-icons/ri';
import {AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col w-screen lg:pt-12 p-6 pb-8 justify-center pl-8 lg:gap-48 gap-4 bg-[#e5d2c4]/30 relative'>
        <div className='flex absolute -bottom-3 left-1/4 -z-10'><img src={Circle} alt='' className=''></img></div>
        <div className='lg:flex hidden absolute top-4 right-[17rem] -z-10'><img src={Rec} alt='' className='lg:h-72 h-40'></img></div>
        <div className='flex absolute bottom-10 lg:right-[21rem] right-16'><img src={Rec2} alt='' className=''></img></div>
        <div className='flex flex-col gap-6'>
            <span className=''><img src={Logo} alt='' className='w-40 h-14'></img></span>
            <div className='flex flex-col'>
                <span className='text-base font-gilroyy font-normal text-[#000000]/60'>Your go to agency,</span>
                <span className='text-base font-gilroyy font-normal text-[#000000]/60'>providing marketing</span>
                <span className='text-base font-gilroyy font-normal text-[#000000]/60'>business support solutions.</span>
                <span className='text-base font-gilroyy font-normal text-[#000000]/60'>Creative {'>'} PR {'>'} Strategy</span>
            </div>
            <div className='flex gap-3'>
                <a href='https://www.facebook.com/profile.php?id=61550311576022' rel='noreferrer' className='flex items-center p-2 text-[#000000]/60 bg-white rounded'><RiFacebookFill className='text-xl'/></a>
                <a href='https://www.linkedin.com/company/vydaagency/' rel='noreferrer' className='flex items-center p-2 text-[#000000]/60 bg-white rounded'><AiOutlineLinkedin className='text-xl'/></a>
                <a href='https://instagram.com/vydaagency?igshid=MzRlODBiNWFlZA==' rel='noreferrer' className='flex items-center p-2 text-[#000000]/60 bg-white rounded'><AiOutlineInstagram className='text-xl'/></a>
                
                
                
            </div>
        </div>
        {/* <div className='flex flex-col gap-3'>
            <span className='mb-3 text-xl font-medium text-[#273773]'>Our Services</span>
            <span className='text-sm font-normal text-[#000000]/60'>Social media consulting</span>
            <span className='text-sm font-normal text-[#000000]/60'>Research and Development Assistant</span>
            <span className='text-sm font-normal text-[#000000]/60'>Virtual Administrative Assistance</span>
            <span className='text-sm font-normal text-[#000000]/60'>Virtual Public Relations Manager</span>
            <span className='text-sm font-normal text-[#000000]/60'>Creative/Design Assistant</span>
            <span className='text-sm font-normal text-[#000000]/60'>Virtual Professionals</span>
        </div> */}
        <div className='flex bg-[#ffffff] py-4 px-6 rounded-md w-72'>
            <div className='flex flex-col gap-3'>
                <span className='flex flex-col gap-1'>
                    <span className='text-sm font-gilroyy font-light text-[#000000]/60'>Phone</span>
                    <span className='text-sm font-light text-[#000000]/90'>+234 (0) 818-733-7878</span>
                    <hr className='border text-[#000000]/60 w-full'></hr>
                </span>
                <span className='flex flex-col gap-1'>
                    <span className='text-sm font-gilroyy font-light text-[#000000]/60'>Adress</span>
                    <span className='text-sm font-light text-[#000000]/90'>Lagos, Nigeria</span>
                    <hr className='border text-[#000000]/60 w-full'></hr>
                </span>
                <span className='flex flex-col gap-1'>
                    <span className='text-sm font-gilroyy font-light text-[#000000]/60'>Email</span>
                    <span className='text-sm font-light text-[#000000]/90'>info@vydaagency.com</span>
                    <hr className='border text-[#000000]/60 w-full'></hr>
                </span>
                <Link to='#contact' smooth className='p-4 cursor-pointer text-base font-normal bg-[#273773] text-[#ffffff] rounded-full w-fit'>Send us a message</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;