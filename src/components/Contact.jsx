import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-6 w-screen bg-[#ffffff] lg:pt-16 pt-12 pb-12' id='contact'>
        <div className='flex w-screen justify-center'>
            <span className='uppercase lg:text-4xl text-2xl font-semibold text-[#273773]'>Contact us</span>
        </div>
        <div className='relative w-screen justify-center flex items-center'>
            <form > 
                <ul className='flex gap-3 flex-col'>
                    <li className='flex lg:flex-row flex-col gap-2 lg:gap-4'>
                        <span className='flex flex-col lg:gap-1'>
                            <span className='text-sm font-light text-[#000000]/60'>First Name</span>
                            <input placeholder='Enter your first name' className='border-[1px] h-[40px] lg:w-72 w-[19rem] border-box px-1 py-4 bg-[#f6f6f1] border-[#22222290]'></input>
                        </span>
                        <span className='flex flex-col lg:gap-1'>
                            <span className='text-sm font-light text-[#000000]/60'>Last Name</span>
                            <input placeholder='Enter your last name' className='border-[1px] h-[40px] lg:w-72 w-[19rem] border-box px-1 py-4 bg-[#f6f6f1] border-[#22222290]'></input>
                        </span>
                        <span className='flex flex-col lg:gap-1'>
                            <span className='text-sm font-light text-[#000000]/60'>Email</span>
                            <input placeholder='Enter your Email ' className='border-[1px] h-[40px] lg:w-72 w-[19rem] border-box px-1 py-4 bg-[#f6f6f1] border-[#22222290]'></input>
                        </span>
                    </li>
                    <li>
                        <span className='flex flex-col lg:gap-1'>
                            <span className='text-sm font-light text-[#000000]/60'>Message</span>
                            <input placeholder='Enter your message' className='border-[1px] h-[120px] border-box px-1 py-4 bg-[#f6f6f1] border-[#22222290]'></input>
                        </span>
                    </li>
                    <li className='flex justify-center lg:mt-4 mt-1'>
                        <span><button className='border-box lg:px-8 px-3 py-3 text-white bg-[#273773] text-sm rounded-full' type='submit'>Send us a message</button></span>
                    </li>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default Contact;