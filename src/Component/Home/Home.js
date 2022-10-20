/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/imghero.jpg'
const Home = () => {
    const navigate=useNavigate();
    const shopNowBtn=()=>{
        navigate('/order');
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content gap-x-24 flex-col lg:flex-row-reverse">
                <img src={img} className=" max-w-xs rounded-lg shadow-2xl" />
                <div>
                    <small className='ml-1 text-warning'>save up to 70% off</small>
                    <h1 className="text-5xl font-bold">New Collection For All</h1>
                    <p className="py-6">Discover all the new arrivals of ready-to-wear collection.</p>
                    <button onClick={shopNowBtn} className="btn btn-warning">Shop Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;