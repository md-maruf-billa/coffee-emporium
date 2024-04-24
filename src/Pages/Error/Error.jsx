import React from 'react';
import Nav from '../../Components/Nav/Nav';
import error from '../../assets/images/404/404.gif'
import Button from '../../Utils/Button';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Nav />
            <div className='flex justify-center items-center min-h-[calc(100vh-120px)]'>
                <div className='flex justify-center items-center flex-col'>
                    <img src={error} alt="" />
                    <Link to={"/"}>
                        <Button btnName={"Back to Home"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;