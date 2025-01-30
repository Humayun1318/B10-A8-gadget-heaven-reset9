
import NavbarLinks from './NavLinks';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {


  return (
    <div className='w-11/12 mx-auto'>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-auto p-2 shadow  ">
              <NavbarLinks></NavbarLinks>
            </ul>
          </div>
          <a className="btn btn-ghost  lg:text-xl font-bold text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLinks></NavbarLinks>
          </ul>
        </div>
        <div className="navbar-end text-white">
          <IoCartOutline className='text-black bg-white mr-4 text-4xl p-2 rounded-full'/>
          <CiHeart className='text-black bg-white text-4xl p-2 rounded-full' />
        </div>
      </div>
    </div>
    // <div>
    //   <div>
    //     logo
    //   </div>
    //   <div>
        
    //     <NavbarLinks></NavbarLinks>
    //   </div>
    //   <div>
    //     <button>btn</button>
    //   </div>
    // </div>
  );
};

export default Navbar;