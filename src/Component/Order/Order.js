import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
const Order = () => {
    const loadedProducts=useLoaderData();
    return (
        <div className='flex '>
            <div className="grid grid-cols-3 gap-y-9 px-10 py-20 w-3/4">
                {
                    loadedProducts.map(product=><Product product={product} key={product.id}/>)
                }
            </div>
            <div className="w-1/4 py-10 bg-slate-800">
                <div className="sticky top-14">
                <Cart orderCart/>
                </div>
                
            </div>
        </div>
    );
};

export default Order;