import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Structure from '../Pages/Structure/Structure';
import Home from '../Pages/Home/Home';
import NewCoffee from '../Pages/NewCoffee/NewCoffee';
import Error from '../Pages/Error/Error';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Structure></Structure>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/new-coffee",
                element: <NewCoffee />
            }
        ]
    }
]);

export default Routes;