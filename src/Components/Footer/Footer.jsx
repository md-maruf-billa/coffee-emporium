import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import logo from '../../assets/images/more/logo1.png'
import bgImg from '../../assets/images/more/13.jpg'

const Footer = () => {
    return (
        <div className='pt-10 lg:pt-[121px] pb-8 mt-28' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='container mx-auto md:flex px-4 lg:px-0 justify-between items-center'>
                <div className='space-y-4 md:w-1/2'>
                    <img className='h-[90px] w-[75px]' src={logo} alt="" />
                    <h3 className='font-ranco text-5xl text-[#331A15]'>Coffee Emporium</h3>
                    <p className='lg:w-[500px]'>
                        Always ready to be your friend. Come & Contact with us to share your
                        memorable moments, to share with your best companion.
                    </p>
                    <div className='flex items-center gap-3 *:text-3xl *:cursor-pointer'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                    <h4 className='font-ranco text-5xl text-[#331A15] pt-4'>Get in Touch</h4>

                    <div className='*:flex *:items-center *:gap-6 space-y-2'>
                        <p>
                            <FaPhone />
                            <span>01730827996</span>
                        </p>
                        <p>
                            <MdEmail />
                            <span>eng.marufbilla@gmail.com</span>
                        </p>
                        <p>
                            <FaLocationDot />
                            <span>Kurigramm TTC More</span>
                        </p>
                    </div>
                </div>
                {/* ----------------------------------------------- */}
                <div className='md:w-1/2 mt-8 md:mt-0'>
                    <h3 className='font-ranco text-5xl text-[#331A15]'>Contact With Us</h3>
                    <form className='flex flex-col gap-4 mt-8'>
                        <input className='px-2 py-1 w-full' type="text" placeholder='Name' />
                        <input className='px-2 py-1 w-full' type="email" placeholder='Email' />
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                        <div>
                            <input className='font-ranco px-4 py-1 cursor-pointer border border-[#331A15] rounded-full' type="submit" value="Send Message" />
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Footer;