import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {OrderedProductsContext} from '../../Context/OrderedProductContext';
const Cart = ({orderCart,reviewCart}) => {
    const {products,setProducts}=useContext(OrderedProductsContext);
    const navigate=useNavigate();
    console.log(products);
    let btnHandle2;
    let btnHandle2Name;
    if(orderCart){
        btnHandle2Name="Review Order";
        btnHandle2=()=>{
            navigate('/order-review');
        }
    }
    if(reviewCart){
        btnHandle2Name="Processed Checkout";
        btnHandle2=()=>{
            alert("Your Products Is added to the process of delivery");
        }
    }
    const cartDetails=products.reduce((p1,p2)=>{
        const totalPrice=p1.price+p2.price;
        const shippingCharge=p1.shipping+p2.shipping;
        return {
            price:totalPrice,
            shipping:shippingCharge
        }
    },{price:0,shipping:0});
    const tax=(cartDetails.price*30)/100;
    const grandTotalPrice=cartDetails.shipping+cartDetails.price+tax;
    return (
        <div className='flex flex-col justify-center gap-4 px-4'>
            <h1 className='text-center mb-7 text-2xl'>Order Summary</h1>
            <small className='text-center'>Selected Items : {products.length}</small>
            <small className='text-center'>Total Price : {cartDetails.price}</small>
            <small className='text-center'>Total Shipping Cost : {cartDetails.shipping}</small>
            <small className='text-center'>Tax : {tax}</small>
            <p className='text-center mt-7 text-lg'>Grand Total Price : {grandTotalPrice}</p>
            <div className="btn-con">
                <button onClick={()=>{setProducts([]);localStorage.removeItem('cartProducts');}} className="btn btn-error w-full ">Clear Cart</button>
                <button onClick={btnHandle2} className="btn btn-warning w-full mt-3">{btnHandle2Name}</button>
                
            </div>
        </div>
    );
};

export default Cart;