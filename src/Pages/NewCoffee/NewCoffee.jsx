import React, { useContext } from 'react';
import Button from '../../Utils/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/more/11.png'
import Swal from 'sweetalert2';
import { CoffeeContext } from '../../Context/CoffeeContextProvider';

const NewCoffee = () => {
    const {setLoading} = useContext(CoffeeContext);

    // -------------------Add New Coffee Function Hare-----------

    const handelAddNewCoffee = (event) => {
        event.preventDefault()
        const form = event.target;

        // -----Access Form value-------
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;

        // ---------Create Coffee Object-------

        const newCoffee = { name, supplier, category, chef, price, details, photoURL };


        // ----------Send Data to Server side---------

        fetch("http://localhost:7000/new-coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(result => {
                form.reset()
                Swal.fire({
                    title: "Successfully Added",
                    text: "Your coffee item added successfully go home to see it",
                    icon: "success"
                });
                setLoading(true)
            })


    }

    return (
        <div className="bg-[url(/11.png)]">
            <div className='container mx-auto mt-10'>
                <div className='flex items-center gap-2 rounded-lg'>
                    <FaArrowLeft />
                    <Link to={"/"} className='font-ranco text-2xl'>Back to Home</Link>
                </div>


                {/* --------------Form section-------------- */}

                <div className='bg-[#F4F3F0] py-[70px] px-8 lg:px-[112px] mt-4 md:mt-12 rounded-lg'>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <h2 className='font-ranco text-5xl'>Add New Coffee</h2>
                        <p className='lg:w-[900px]'>
                            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>
                    <form onSubmit={handelAddNewCoffee}>
                        <div className='flex flex-col md:flex-row gap-6 mt-8'>
                            <div className='md:w-1/2 space-y-6'>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Name</h3>
                                    <input name='name' className='p-2 rounded-lg' type="text" placeholder='Enter your coffee name' />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Supplier</h3>
                                    <input name='supplier' className='p-2 rounded-lg' type="text" placeholder='Enter coffee supplier' />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Category</h3>
                                    <input name='category' className='p-2 rounded-lg' type="text" placeholder='Enter coffee category' />
                                </div>
                            </div>
                            <div className='md:w-1/2 space-y-6'>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Chef</h3>
                                    <input name='chef' className='p-2 rounded-lg' type="text" placeholder='Enter coffee chef' />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Price</h3>
                                    <input name='price' className='p-2 rounded-lg' type="number" placeholder='Enter coffee Price' />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Details</h3>
                                    <input name='details' className='p-2 rounded-lg' type="text" placeholder='Enter coffee details' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 rounded-lg mt-6'>
                            <h3 className='font-semibold'>Photo</h3>
                            <input name='photoURL' className='p-2 rounded-lg' type="text" placeholder='Enter photo URL' />
                        </div>
                        <button type='submit' className='w-full'>
                            <Button btnName={"Add Coffee"} size={"w-full mt-6"}></Button>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewCoffee;   