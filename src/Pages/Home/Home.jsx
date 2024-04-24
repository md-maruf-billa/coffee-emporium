import React, { useContext, useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import ServicesMini from '../../Utils/ServicesMini';
import ProductCard from '../../Components/ProductCard/ProductCard';
import productBg from '../../assets/images/more/1.png'
import { CoffeeContext } from '../../Context/CoffeeContextProvider';
const Home = () => {

    const [allImage, setAllImage] = useState([]);

    useEffect(() => {
        fetch("/cup.json")
            .then(res => res.json())
            .then(result => {
                setAllImage(result)
            })
    }, [])

    const { allCoffee, setAllCoffee } = useContext(CoffeeContext);

    return (
        <div>
            {/* --------------Banner Section hare------------- */}
            <Banner></Banner>

            {/* --------------Mini Services section hare------- */}
            <ServicesMini></ServicesMini>

            {/* -------------Our Popular Products Section hare--- */}
            <h1 className='text-[#331A15] font-ranco text-center text-5xl mt-[140px]'>Our Popular Products</h1>
            {/* --------products card---------- */}
            <div className='z-[500]' style={{ backgroundImage: `url(${productBg})` }}>

                {

                    allCoffee.length === 0 ? <div className='mt-20 flex justify-center items-center'>
                        <img src="https://cdn.dribbble.com/users/107759/screenshots/4588830/article-not-found.gif" alt="" />
                    </div> :

                        <div className='container mx-auto mt-20 '>
                            <div className='grid grid-cols-2 gap-10'>
                                {
                                    allCoffee.map(coffee => <ProductCard key={coffee._id} coffee={coffee}></ProductCard>)
                                }
                            </div>
                        </div>
                }
            </div>



            {/* --------------Cup Gallery section------------ */}

            <h3 className='font-ranco text-center text-[55px] text-[#331A15] mt-[150px] mb-12'>Follow on Instagram</h3>

            <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 px-4 lg:px-0 lg:grid-cols-4 gap-6'>

                {
                    allImage.map((img, idx) => <div key={idx}>
                        <img className='w-full' src={img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;