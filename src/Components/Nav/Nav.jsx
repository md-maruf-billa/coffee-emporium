import React from 'react';
import navBg from '../../assets/images/more/15.jpg'
import logo from '../../assets/images/more/logo1.png'
import Button from '../../Utils/Button';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    const navButton = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/coffees">Coffees</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/latest">Latest</NavLink></li>
    </>
    return (
        <div className='text-white ' style={{ backgroundImage: `url(${navBg})` }}>
            <div className='container mx-auto'>
                <div className="navbar">

                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navButton
                            }
                        </ul>
                    </div>
                    <div className="navbar-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#00000011] rounded-box w-52">
                                {
                                    navButton
                                }
                            </ul>
                        </div>
                        <img className='w-[75px] h-[90px] hidden md:block' src={logo} alt="" />
                        <a className="text-2xl md:text-6xl font-ranco ">Coffee Emporium</a>
                    </div>
                    <div className="navbar-end">
                        <Button size={"text-xs lg:text-2xl"} btnName={"Login Now"}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;