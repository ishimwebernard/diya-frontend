import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/home.jsx'
import Login from './components/login.jsx'
import SignUp from './components/signup.jsx'
import Admin from './components/admin.jsx'
import Products from './components/products.jsx'
import Orders from './components/orders.jsx'
import CustomerProducts from './components/customerProducts.jsx'
import MyAccount from './components/myAccount.jsx'
import Manager from './components/manager.jsx'
import Customer from './components/customer.jsx'
import CustomerOrders from './components/customer-orders.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/admin/products",
    element: <Products />
  },
  {
    path: "/admin/orders",
    element: <Orders />
  },
  {
    path: "/customer/products",
    element: <CustomerProducts />
  },
  {
    path: "/myaccount",
    element: <MyAccount />
  },
  {
    path: "/manager",
    element: <Manager />
  },
  {
    path: "/customer/profile",
    element: <Customer />
  },
  {
    path: "/customer/orders",
    element: <CustomerOrders />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
