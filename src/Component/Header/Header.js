import React from 'react';
import { Link } from "react-router-dom";
import img from '../../images/Logo.svg';
import { useContext } from 'react';
import {authContext} from '../../Context/UserInfoContext';
const Header = () => {
    const {user,logout}=useContext(authContext);
    return (
        <div className="navbar container mx-auto px-6 py-4 bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={img} alt="" /></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 text-white">
      <li><Link to="/order">Order</Link></li>
      <li><Link to="/order-review">Order Review</Link></li>
      <li><Link to="/manage-inventory">Manage Inventory</Link></li>
      {
        user?<div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">{user.displayName}</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">
          <li><button className='w-full text-center' onClick={()=>{
            logout()
            .then(()=>{})
            .catch(()=>{});
          }}>Sign Out</button></li>
        </ul>
      </div>:
      <li><Link to="/login">Login</Link></li>
      }

    </ul>
  </div>
</div>
    );
};

export default Header;