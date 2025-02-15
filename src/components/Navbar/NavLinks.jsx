import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { DataContext } from "../../Context/context";


const NavbarLinks = () => {
  const { pathname } = useLocation();
  const { data } = useContext(DataContext)
  const categories = [...new Set(data.map((item) => (item.category).toLowerCase()))]
  const categoriesPath = categories.map(cat => "/category/" + cat)

  return (
    <div className={`flex flex-col lg:flex-row gap-2 lg:gap-6  font-medium ${pathname === '/' || categoriesPath.includes(pathname) ? 'text-black lg:text-white' : " "}`}>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'text-blue-400 font-bold' : ''}
      >Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) => isActive ? 'text-blue-400 font-bold' : ''}
      >Statistics
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => isActive ? 'text-blue-400 font-bold' : ''}
      >Dashboard
      </NavLink>
    </div>
  );
};

export default NavbarLinks;