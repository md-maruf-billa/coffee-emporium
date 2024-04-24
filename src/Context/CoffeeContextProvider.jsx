import React, { createContext, useEffect, useState } from 'react';

// ----------------Create context----------

export const CoffeeContext = createContext(null);


const CoffeeContextProvider = ({ children }) => {

    const [allCoffee, setAllCoffee] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:7000/")
            .then(res => res.json())
            .then(result => {
                setAllCoffee(result)
                setLoading(false);
            })
    }, [loading])

    const value = {
        allCoffee,
        setAllCoffee,
        setLoading
    }
    return (
        <CoffeeContext.Provider value={value}>
            {children}
        </CoffeeContext.Provider>
    );
};

export default CoffeeContextProvider;