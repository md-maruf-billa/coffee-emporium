import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Structure from '../Pages/Home/Structure/Structure';
import Home from '../Pages/Home/Home';

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Structure></Structure>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
]);

export default Routes;