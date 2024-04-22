import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../../Components/Nav/Nav';

const Structure = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
        </>
    );
};

export default Structure;