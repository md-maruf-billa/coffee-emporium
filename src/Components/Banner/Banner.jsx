import React from 'react';
import Button from '../../Utils/Button';
const Banner = () => {
    return (
        <div className='h-[500px] lg:h-[800px] bg-no-repeat bg-cover bg-[url(./banner-1.png)] font-common text-white flex justify-center lg:justify-end items-center px-4 lg:px-[335px]'>

            <div className='space-y-4'>
                <h2 className='font-ranco text-4xl md:text-[55px]'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='md:w-[700px]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                <Button size={"text-xs lg:text-2xl"} btnName={"Learn More"}/>
            </div>
        </div>
    );
};

export default Banner;