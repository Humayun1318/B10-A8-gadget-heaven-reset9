import { NavLink } from "react-router-dom";


const NavbarLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 text-black lg:text-white font-medium">
      <NavLink
        to="/"
        className={({ isActive }) => isActive && 'text-blue-400 font-bold'}
      >Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) => isActive && 'text-blue-400 font-bold'}
      >Statistics
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => isActive && 'text-blue-400 font-bold'}
      >Dashboard
      </NavLink>
    </div>
  );
};

export default NavbarLinks;