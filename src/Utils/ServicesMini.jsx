import React from 'react';
import serviceImg1 from '../assets/images/icons/1.png'
import serviceImg2 from '../assets/images/icons/2.png'
import serviceImg3 from '../assets/images/icons/3.png'
import serviceImg4 from '../assets/images/icons/4.png'


const ServicesMini = () => {
    return (
        <div className='bg-[#ECEAE3] py-16'>
            <div className='container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 px-4 lg:grid-cols-4 items-center md:px-8 md:space-y-8'>
                <div className='space-y-2'>
                    <img src={serviceImg1} alt="" />
                    <h4 className='font-ranco text-4xl'>Awesome Aroma</h4>
                    <p   >You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-2'>
                    <img src={serviceImg2} alt="" />
                    <h4 className='font-ranco text-4xl'>High Quality</h4>
                    <p   >We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-2'>
                    <img src={serviceImg3} alt="" />
                    <h4 className='font-ranco text-4xl'>Pure Grades</h4>
                    <p   >The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-2'>
                    <img src={serviceImg4} alt="" />
                    <h4 className='font-ranco text-4xl'>Proper Roasting</h4>
                    <p   >Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesMini;