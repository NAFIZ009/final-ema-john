import React, { createContext, useEffect, useState } from 'react';
import { getFormLs } from '../Utilits/addToLs';

//creating Context api
const OrderedProductsContext=createContext();

const OrderedProductContext = ({children}) => {
    //creating state for storing selected products
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getFormLs(setProducts);
    },[])

    //value of contextapi
    const value={products,setProducts};

    return (
        <div>
            <OrderedProductsContext.Provider value={value}>
                {children}
            </OrderedProductsContext.Provider>
        </div>
    );
};

export {OrderedProductContext,OrderedProductsContext};