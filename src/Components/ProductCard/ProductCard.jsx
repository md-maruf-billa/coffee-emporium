import { useContext } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { CoffeeContext } from '../../Context/CoffeeContextProvider';

const ProductCard = ({ coffee }) => {
    const { name, chef, price, photoURL } = coffee;
    const {allCoffee , setAllCoffee} = useContext(CoffeeContext);

    // ---------Delete coffee to database--------
    const handelDelete = (id) => {
        
        fetch(`http://localhost:7000/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            const remainingCoffee = allCoffee.filter(coffee => coffee._id != id);
            setAllCoffee(remainingCoffee)
        })
    }


    return (
        <div className='flex items-center justify-between px-12 py-8 rounded-md bg-[#F5F4F1]  z-0'>
            <div>
                <img className='h-[200px] w-[190px]' src={photoURL} alt="" />
            </div>
            <div>
                <p><span className='font-semibold'>Name: </span>{name}</p>
                <p><span className='font-semibold'>Chef: </span>{chef}</p>
                <p><span className='font-semibold'>Price: </span>{price}</p>
            </div>
            <div className='*:cursor-pointer *:size-[40px] *:flex justify-center items-center space-y-4 *:rounded-lg *:text-white z-[100]'>
                <div className='p-3  border bg-[#D2B48C] cursor-pointer'>
                    <FaEye ></FaEye>
                </div>
                <div className='p-3  border bg-[#3C393B] cursor-pointer'>
                    <FaPen></FaPen>
                </div>
                <div onClick={() => handelDelete(coffee._id)} 
                className='p-3  border bg-[#EA4744] cursor-pointer'>
                    <MdDelete />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;