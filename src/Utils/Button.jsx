import React from 'react';

const Button = ({btnName,size}) => {
    return (
        <button className={`font-ranco text-2xl  rounded px-5 py-2.5 overflow-hidden group bg-[#E3B577] text-black relative hover:bg-gradient-to-r hover:from-[#E3B577] hover:to-[#ead1b1] hover:ring-2 hover:ring-offset-2 hover:ring-[#E3B577] transition-all ease-out duration-300 ${size}`}>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">{btnName}</span>
        </button>
    );
};

export default Button;