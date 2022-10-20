import React from 'react';
import { useContext } from 'react';
import {OrderedProductsContext} from '../../Context/OrderedProductContext';
import { addToLs } from '../../Utilits/addToLs';

const Product = ({product}) => {
    const {setProducts}=useContext(OrderedProductsContext);
    const {name,img,price,ratings,seller}=product;
    return (
        <div>
        <div className="card h-full w-80 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <small>Seller : {seller}</small>
          <small>Ratings : {ratings}</small>
          <div className="card-actions justify-end">
            <button onClick={(e)=>{e.preventDefault();
                setProducts(prev=>[
                    ...prev,
                    product
                ]);
                addToLs(product);
        }} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;