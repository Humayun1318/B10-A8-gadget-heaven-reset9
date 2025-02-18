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

const rootLoader = async () => {
  try {
    console.log("Fetching data in loader...");
    const res = await fetch("/data.json");

    if (!res.ok) {
      console.error("Fetch error:", res.statusText);
      return null; // Prevents throwing an error that triggers ErrorPage
    }

    const jsonData = await res.json();
    return jsonData;  // Ensure loader returns the fetched data
  } catch (error) {
    console.error("Loader Error:", error);
    return null;  // Prevents breaking hydration
  }
};



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
    ]
  },
  {
    path: "/hire",
    element: <Hire></Hire>,
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
