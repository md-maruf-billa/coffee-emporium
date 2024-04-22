import React from 'react';
import { FaEye } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';

const ProductCard = () => {
    return (
        <div className='grid grid-cols-3 items-center'>
            <div>
                <img className='size-[200px]' src='/2.png' alt="" />
            </div>
            <div>
                <p><span className='font-semibold'>Name:</span></p>
                <p><span className='font-semibold'>Chef:</span></p>
                <p><span className='font-semibold'>Price:</span></p>
            </div>
            <div className='*:cursor-pointer *:size-[40px] *:flex justify-center items-center space-y-2 *:rounded-lg *:text-white'>
                <div className='p-3  border bg-[#D2B48C]'>
                    <FaEye ></FaEye>
                </div>
                <div className='p-3  border bg-[#3C393B]'>
                    <FaPen></FaPen>
                </div>
                <div className='p-3  border bg-[#EA4744]'>
                    <MdDelete />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;