import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../App'

const Root = () => {
  return (
    <div className='bg-[#F6F6F6]'>
      <Header></Header>
      <Outlet ></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;