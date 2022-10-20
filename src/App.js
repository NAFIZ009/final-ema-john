import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './LayOut/Layout';
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import OrderReview from './Component/OrderReview/OrderReview';
import Login from './Component/Login/Login';
import SignUp from './SignUp/SignUp';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import ErrorPage from './Component/ErrorPage/ErrorPage';


function App() {
  

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/order',
          loader:()=>fetch('products.json'),
          element:<Order/>
        },
        {
          path:"/order-review",
          element:<PrivetRoute><OrderReview/></PrivetRoute>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<SignUp/>
        },
        {
          path:'*',
          element:<ErrorPage/>
        }
      ]
    }
    
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
