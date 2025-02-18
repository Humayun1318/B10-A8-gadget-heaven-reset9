import { Outlet} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../App'
import DataProvider from '../DataProvider/DataProvider';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { ToastContainer } from 'react-toastify';


const Root = () => {

  

  return (
    <div className='bg-[#F6F6F6]'>
      <DynamicTitle>
        <DataProvider >
          <Header></Header>
          <Outlet ></Outlet>
          <Footer></Footer>
          <ToastContainer></ToastContainer>
        </DataProvider>
      </DynamicTitle>
    </div>
  );
};

export default Root;