import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import {authContext} from '../../Context/UserInfoContext';
const PrivetRoute = ({children}) => {
    const {user}=useContext(authContext);
    console.log(user,children);
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;