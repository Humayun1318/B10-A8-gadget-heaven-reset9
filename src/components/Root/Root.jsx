import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../App'

const Root = () => {
  return (
    <div>
      <Header></Header>
      <h1 className='bg-red-300'>outelt suru</h1>
      <Outlet></Outlet>
      <h1 className='bg-yellow-300'>outlet sesh</h1>
      <Footer></Footer>
    </div>
  );
};

export default Root;