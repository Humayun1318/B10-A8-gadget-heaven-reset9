import { Outlet} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../App'
import DataProvider from '../DataProvider/DataProvider';


const Root = () => {

  

  return (
    <div className='bg-[#F6F6F6]'>
      <DataProvider >
        <Header></Header>
        <Outlet ></Outlet>
        <Footer></Footer>
      </DataProvider>
    </div>
  );
};

export default Root;