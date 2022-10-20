import React from 'react';
import { useContext } from 'react';
import {OrderedProductsContext} from '../../Context/OrderedProductContext';

const OrderReviewProduct = ({product,index}) => {
    const {products,setProducts}=useContext(OrderedProductsContext);
    const {img,name,price,shipping}=product;
    return (
        <div>
            <div className="card card-side  bg-base-100 shadow-xl">
                <figure>
                    <img src={img} className='w-40' alt="Movie"/>
                </figure>
                <div className="card-body">
                    <h1 className='text-2xl'>{name}</h1>
                    <h2>Price : {price}</h2>
                    <h2>Shipping Charge : {shipping}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={()=>{
                            const requiredProducts=products.filter((pro,i)=> i!==index);
                            setProducts(requiredProducts);
                        }} className="btn btn-primary">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReviewProduct;