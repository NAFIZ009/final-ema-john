import React from 'react';
import { useContext } from 'react';
import {OrderedProductsContext} from '../../Context/OrderedProductContext';
import Cart from '../Cart/Cart';
import OrderReviewProduct from '../OrderReviewProduct/OrderReviewProduct';
import './orderReview.css';
const OrderReview = () => {
    const {products}=useContext(OrderedProductsContext);
    return (
        <div className="card w-9/12 mx-auto lg:card-side bg-base-100 mt-20">
            <div className='w-6/12 flex flex-col gap-7 hidden-scroll' style={{
                overflowY:"scroll",
                height:"28rem",
            }}>
                {
                    products.map((product,index)=><OrderReviewProduct key={product.id} product={product} index={index}/>)
                }
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card-body w-6/12 ">
                <Cart reviewCart/>
            </div>
</div>
    );
};

export default OrderReview;