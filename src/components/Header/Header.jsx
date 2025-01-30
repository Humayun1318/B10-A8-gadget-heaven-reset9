

import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
  const {pathname} = useLocation();
  // console.log(location);
  return (
    <div className=' '>
      <div className={pathname === '/' ? 'bg-[#9538E2] border-7 border-[#F6F6F6] rounded-4xl  lg:mr-8  lg:ml-8  lg:mt-8  h-[700px]' :' my-6 border '}>
        <Navbar></Navbar>
        {
          pathname === '/' ? <Banner></Banner> : ''
        }
      </div>
    </div>
  );
};

export default Header;