
import { useContext } from 'react';
import NavbarLinks from './NavLinks';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import {  useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context/context';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const { data, addToCart, addFavorites, setActive } = useContext(DataContext)
  const categories = [...new Set(data.map((item) => (item.category).toLowerCase()))]
  const categoriesPath = categories.map(cat => "/category/" + cat)

  const navigateToDashboard = () => {
    setActive(true)
    navigate('/dashboard')
  }
  const navigateToDashboardWishlist = () => {
    setActive(false)
    navigate('/dashboard')
  }

  return (
    <div className={`
    ${pathname === '/' || categoriesPath.includes(pathname) ? 'w-11/12 text-white mx-auto' : 'sm:w-[90%] lg:w-[80%] mx-auto'}`}>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-auto p-2 shadow  ">
              <NavbarLinks></NavbarLinks>
            </ul>
          </div>
          <a className="btn btn-ghost  lg:text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLinks></NavbarLinks>
          </ul>
        </div>
        <div className="navbar-end text-white">
          <p className='text-black bg-white mr-4 text-2xl p-2 rounded-full relative cursor-pointer'
            onClick={navigateToDashboard}
          >
            {
              addToCart.length > 0 ? <span className='absolute -top-3 -right-2 bg-black text-white rounded-full 
              h-[24px] w-[24px] flex justify-center items-center font-medium p-3'> {addToCart.length} </span>
                : ''
            }
            <IoCartOutline className='' />
          </p>
          <p className='text-black bg-white mr-4 text-2xl p-2 rounded-full relative cursor-pointer' onClick={navigateToDashboardWishlist}>
            {
              addFavorites.length > 0 ?
                <span className='absolute -top-3 -right-2 bg-black text-white rounded-full h-[24px] w-[24px] flex justify-center items-center font-medium p-3'> {addFavorites.length} </span>
                : ''
            }
            <CiHeart className='' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;