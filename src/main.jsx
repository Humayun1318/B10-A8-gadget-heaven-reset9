import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hire from './components/Hire/Hire';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Categories from './components/Home/Categories/Categories';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { HelmetProvider } from 'react-helmet-async';
import DealsPage from './components/Deals&discount/DealsPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // loader: rootLoader,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            index: true,
            element: <Categories></Categories>
          },
          {
            path: `category/:category`,
            element: <Categories></Categories>
          }
        ]
      },
      {
        path: '/productDetails/:productId',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "deals",
        element: <DealsPage></DealsPage>,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
