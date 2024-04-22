import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ServicesMini from '../../Utils/ServicesMini';
import ProductCard from '../../Components/ProductCard/ProductCard';
const Home = () => {

    return (
        <div>
            {/* --------------Banner Section hare------------- */}
            <Banner></Banner>

            {/* --------------Mini Services section hare------- */}
            <ServicesMini></ServicesMini>

            {/* -------------Our Popular Products Section hare--- */}
            <h1 className='text-[#331A15] font-ranco text-center text-5xl mt-[140px]'>Our Popular Products</h1>
            {/* --------products card---------- */}
            <div className='container mx-auto mt-20'>
                {

                }
                <div className='grid grid-cols-2'>
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
    );
};

export default Home;