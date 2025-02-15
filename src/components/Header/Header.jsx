

import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import { DataContext } from '../../Context/context';


const Header = () => {
  const { pathname } = useLocation();
  const { data } = useContext(DataContext)
  const categories = [...new Set(data.map((item) => (item.category).toLowerCase()))]
  const categoriesPath = categories.map(cat => "/category/" + cat)
  
  return (
    <div className=' bg-[#fff]'>
      <div className={`${pathname === '/' || categoriesPath.includes(pathname) ? 'bg-[#9538E2] border-7 border-[#F6F6F6] rounded-4xl  h-[700px] lg:mr-8 lg:ml-8 lg:mt-8' : ' my-6 border '}`}>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Header;