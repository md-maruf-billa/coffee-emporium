import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

const Structure = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Structure;